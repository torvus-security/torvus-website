export default function Empty({ title = "Nothing here yet", body = "When data arrives, it'll show up here." }) {
  return (
    <div className="empty surface--light p-8">
      <span className="icon" aria-hidden />
      <h3 className="h3">{title}</h3>
      <p className="body">{body}</p>
    </div>
  )
}
