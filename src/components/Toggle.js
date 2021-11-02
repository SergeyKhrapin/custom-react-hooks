import useToggle from "../customHooks/useToggle"

function Toggle() {
  const { toggle, toggleValue } = useToggle(true)

  return (
    <div>
      <p>{ toggle.toString() }</p>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make true</button>
      <button onClick={() => toggleValue(false)}>Make false</button>
    </div>
  )
}

export default Toggle
