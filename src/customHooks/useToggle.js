import { useState } from "react"

function useToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue)

  return {
    toggle,
    toggleValue: (val) => {
      setToggle((currentToggle) => typeof val === 'boolean' ? val : !currentToggle)
    },
  }
}

export default useToggle
