
/**
 * fix-shadcn-imports.js
 * Usage:
 *   node fix-shadcn-imports.js
 * Run from the repo root. It will scan ./app and ./components for imports using "@/components/ui/*"
 * and normalize the path casing/hyphenation to match shadcn file names.
 */

const fs = require('fs');
const path = require('path');

// Map PascalCase component names to their lowercase (and hyphenated) filenames in /components/ui
const map = {
  Accordion: 'accordion',
  AlertDialog: 'alert-dialog',
  AspectRatio: 'aspect-ratio',
  Avatar: 'avatar',
  Button: 'button',
  Calendar: 'calendar',
  Card: 'card',
  Checkbox: 'checkbox',
  Collapsible: 'collapsible',
  Dialog: 'dialog',
  DropdownMenu: 'dropdown-menu',
  HoverCard: 'hover-card',
  Input: 'input',
  InputOTP: 'input-otp',
  Label: 'label',
  Menubar: 'menubar',
  NavigationMenu: 'navigation-menu',
  Popover: 'popover',
  Progress: 'progress',
  RadioGroup: 'radio-group',
  ScrollArea: 'scroll-area',
  Select: 'select',
  Separator: 'separator',
  Sheet: 'sheet',
  Slider: 'slider',
  Switch: 'switch',
  Tabs: 'tabs',
  Textarea: 'textarea',
  Toast: 'toast',
  Toggle: 'toggle',
  ToggleGroup: 'toggle-group',
  Tooltip: 'tooltip',
  // add any others here as needed
};

const roots = ['app', 'components', 'src'];

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, arrayOfFiles);
    } else if (/\.(tsx?|jsx?)$/.test(filePath)) {
      arrayOfFiles.push(filePath);
    }
  });
  return arrayOfFiles;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace imports like "@/components/ui/Card" or "@/components/ui/AlertDialog"
  // Also handle deep imports like "@/components/ui/Card/index" -> "@/components/ui/card"
  content = content.replace(/@\/components\/ui\/([A-Za-z][A-Za-z0-9]*)\/?(index)?/g, (m, comp) => {
    const lower = map[comp];
    if (lower) return `@/components/ui/${lower}`;
    // If not in map, try a simple lowercase fallback
    return `@/components/ui/${comp.toLowerCase()}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let changed = 0;
for (const root of roots) {
  const full = path.join(process.cwd(), root);
  const files = getAllFiles(full);
  files.forEach(f => {
    if (fixFile(f)) changed++;
  });
}

console.log(`✅ Fixed imports in ${changed} file(s).`);
console.log('Tip: commit the changes and redeploy.');
