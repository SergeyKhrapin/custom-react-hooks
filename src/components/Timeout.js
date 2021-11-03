import { useState, useEffect } from "react"
import useTimeout from "../customHooks/useTimeout"

/*
The counter is equal to 10 on page load. But after 2 sec it changes to 0.
We can clear a timeout whenever we want by clicking on Clear Timeout button.
Also we can start a timeout again by clicking on Start Timeout button.
*/

function Timeout() {
  const [counter, setCounter] = useState(10)
  const { start, clear } = useTimeout(() => setCounter(0), 2000)

  return (
    <div>
      <h2>useTimeout</h2>
      <p>{ counter }</p>
      <button onClick={() => setCounter(c => c + 1)}>Increment Counter</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={start}>Start Timeout</button>
    </div>
  )
}

export default Timeout
