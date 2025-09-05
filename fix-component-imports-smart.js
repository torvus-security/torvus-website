
/**
 * fix-component-imports-smart.js
 *
 * Scans your repo for files under ./components/** and builds a map of
 * canonicalized module paths (case-insensitive; ignores '-' and '_').
 * Then it scans ./app, ./components, and ./src for imports using "@/components/..."
 * and rewrites them to the real, existing path (preserving "@/").
 *
 * Usage (from repo root):
 *   node fix-component-imports-smart.js
 *
 * After it runs:
 *   git add -A
 *   git commit -m "fix: normalize @/components imports to actual paths"
 *   git push
 */
const fs = require('fs');
const path = require('path');

const SRC_DIRS = ['app', 'components', 'src'];
const SCAN_EXT = ['.tsx', '.ts', '.jsx', '.js'];
const INDEX_EXT = ['', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];
const FILE_EXT = ['.tsx', '.ts', '.jsx', '.js'];

function existsModule(modPath) {
  // Try file.tsx|ts|jsx|js and directory index.*
  for (const ext of FILE_EXT) {
    if (fs.existsSync(path.join(process.cwd(), modPath + ext))) return true;
  }
  for (const idx of INDEX_EXT) {
    if (fs.existsSync(path.join(process.cwd(), modPath + idx))) return true;
  }
  return false;
}

function canonicalize(p) {
  return p.toLowerCase().replace(/[-_]/g, '');
}

function walk(dir, out=[]) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, out);
    } else {
      const ext = path.extname(full);
      if (SCAN_EXT.includes(ext)) out.push(full);
    }
  }
  return out;
}

function buildComponentMap() {
  const compRoot = path.join(process.cwd(), 'components');
  const files = walk(compRoot);
  const map = new Map();
  for (const file of files) {
    // Normalize path to posix and strip leading cwd + extension
    let rel = path.relative(process.cwd(), file).split(path.sep).join('/');
    let noext = rel.replace(/\.(tsx|ts|jsx|js)$/, '');
    // Produce keys for both direct and index patterns
    const keys = new Set();
    keys.add(canonicalize(noext));
    // Also add canonical key without trailing '/index'
    if (noext.endsWith('/index')) {
      keys.add(canonicalize(noext.slice(0, -('/index'.length))));
    }
    for (const k of keys) {
      // Prefer the shortest real path if duplicates happen
      if (!map.has(k) || noext.length < map.get(k).length) {
        map.set(k, noext);
      }
    }
  }
  return map;
}

function fixFile(filePath, compMap) {
  const orig = fs.readFileSync(filePath, 'utf8');
  let content = orig;

  // 1) Static imports: import ... from "@/components/..."
  content = content.replace(/from\s+['"]@\/components\/([^'"]+)['"]/g, (m, p1) => {
    const full = `components/${p1}`;
    if (existsModule(full)) return m; // already valid
    const cand = canonicalize(full);
    const hit = compMap.get(cand);
    if (hit) {
      const fixed = hit.replace(/^components\//, '');
      return `from "@/components/${fixed}"`;
    }
    return m;
  });

  // 2) Dynamic imports: import("@/components/...")
  content = content.replace(/import\(\s*['"]@\/components\/([^'"]+)['"]\s*\)/g, (m, p1) => {
    const full = `components/${p1}`;
    if (existsModule(full)) return m;
    const cand = canonicalize(full);
    const hit = compMap.get(cand);
    if (hit) {
      const fixed = hit.replace(/^components\//, '');
      return `import("@/components/${fixed}")`;
    }
    return m;
  });

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function main() {
  const compMap = buildComponentMap();
  let changed = 0;
  for (const root of SRC_DIRS) {
    const dir = path.join(process.cwd(), root);
    if (!fs.existsSync(dir)) continue;
    const files = walk(dir);
    for (const f of files) {
      if (fixFile(f, compMap)) changed++;
    }
  }
  console.log(`✅ Updated ${changed} file(s).`);
  if (changed > 0) {
    console.log('Next: git add -A && git commit -m "fix: normalize @/components imports" && git push');
  } else {
    console.log('No changes necessary.');
  }
}

main();
