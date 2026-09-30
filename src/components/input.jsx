function BlogInput({ placeholder, value, onChange, type = "text" }) {
  return (
    <input
      className="blog-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default BlogInput
