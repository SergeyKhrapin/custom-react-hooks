import { useState } from "react"

function useTimeout(func, delay = 0) {
  const [timeoutID, setTimeoutID] = useState(null)

  function start() {
    const id = setTimeout(() => {
      func()
    }, delay)
    setTimeoutID(id)
  }

  function clear() {
    clearTimeout(timeoutID)
    setTimeoutID(null)
  }

  return {
    start,
    clear
  }
}

export default useTimeout
