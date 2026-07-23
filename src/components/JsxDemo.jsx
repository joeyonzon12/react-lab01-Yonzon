const JsxDemo = () => {
  const name = 'Joemarie C. Yonzon'

  return (
    <>
      {/* This heading shows a JavaScript expression rendered in JSX. */}
      <h2 className="jsx-demo-title">{name.toUpperCase()}</h2>

      <p className="jsx-demo-copy">This component demonstrates JSX syntax rules.</p>

      <img src="https://via.placeholder.com/120" alt="Demo placeholder" />

      <label htmlFor="demo-input">Enter your note:</label>
      <input id="demo-input" type="text" />
    </>
  )
}

export default JsxDemo
