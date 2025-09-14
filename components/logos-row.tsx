// components/logos-row.tsx
const tags = ["Aegis", "Monarch", "Northwind", "Contour", "Helios"];

export default function LogosRow() {
  return (
    <div className="panel-with-frame p-2">
      <div className="panel p-3 sm:p-4">
        <div className="tag-row">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
