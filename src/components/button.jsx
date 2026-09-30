function BlogButton({ title, onClick, type = "button" }) {
  return (
    <button className="blog-btn" type={type} onClick={onClick}>
      {title}
    </button>
  )
}

export default BlogButton
