import { useState } from "react"
import useInput from "../customHooks/useInput"

function Form() {
  const [message, setMessage] = useState('')
  const { input: inputName, clear: inputNameClear } = useInput('')
  const { input: inputSurname, clear: inputSurnameClear } = useInput('')

  function submitForm(e) {
    e.preventDefault()
    setMessage(`Hello, ${inputName.value} ${inputSurname.value}`)
    inputNameClear()
    inputSurnameClear()
  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input {...inputName} type="text" placeholder="Name" />
        <input {...inputSurname} type="text" placeholder="Surname" />
        <input type="submit" />
      </form>
      <p>{ message }</p>
    </div>
  )
}

export default Form
