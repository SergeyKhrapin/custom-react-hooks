import { useState, useEffect } from "react"

/*
The counter is equal to 10 on page load. But after 2 sec it changes to 0.
We can clear a timeout whenever we want by clicking on Clear Timeout button.
Also we can start a timeout again by clicking on Start Timeout button.
*/

function Timeout() {
  const [counter, setCounter] = useState(10)
  const [timeoutID, setTimeoutID] = useState(null)

  useEffect(start, [])

  function start() {
    const id = setTimeout(() => {
      setCounter(0)
    }, 2000)
    setTimeoutID(id)
  }

  function increment() {
    setCounter(prevCounter => prevCounter + 1)
  }

  function clear() {
    clearTimeout(timeoutID)
    setTimeoutID(null)
  }

  return (
    <div>
      <p>{ counter }</p>
      <button onClick={increment}>Increment Counter</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={start}>Start Timeout</button>
    </div>
  )
}

export default Timeout
