export default function Highlights() {
  const items = [
    { num: "TLS 1.3", lab: "Everywhere" },
    { num: "AES-256-GCM", lab: "At rest" },
    { num: "PFS", lab: "Cipher suites" },
    { num: "24/7", lab: "On-call" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((i) => (
        <div key={i.lab} className="kpi">
          <div className="num">{i.num}</div>
          <div className="lab">{i.lab}</div>
        </div>
      ))}
    </div>
  )
}
