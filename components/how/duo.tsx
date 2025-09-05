export default function Duo({
  you,
  torvus,
}: { you: { title: string; items: string[] }; torvus: { title: string; items: string[] } }) {
  return (
    <div className="duo">
      <div className="duo-card surface--mist border rounded-xl p-4 elev-1 elev-transition">
        <h3 className="h4">{you.title}</h3>
        <ul className="duo-list small">
          {you.items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="duo-card surface--mist border rounded-xl p-4 elev-1 elev-transition">
        <h3 className="h4">{torvus.title}</h3>
        <ul className="duo-list small">
          {torvus.items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
