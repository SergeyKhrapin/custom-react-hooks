import { useEffect, useRef } from "react"

function useTimeout(callback, delay = 0) {
  const callbackRef = useRef(callback)
  const timeoutID = useRef(null)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(start, [delay])

  function start() {
    timeoutID.current = setTimeout(callbackRef.current, delay)
  }

  function clear() {
    clearTimeout(timeoutID.current)
  }

  return {
    start,
    clear
  }
}

export default useTimeout
