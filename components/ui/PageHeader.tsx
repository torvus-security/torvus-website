export function PageHeader({ title, blurb }: { title: string; blurb?: string }) {
  return (
    <header style={{ marginBottom: 12 }}>
      <h1>{title}</h1>
      {blurb && (
        <p className="muted" style={{ marginTop: 4 }}>
          {blurb}
        </p>
      )}
    </header>
  )
}
