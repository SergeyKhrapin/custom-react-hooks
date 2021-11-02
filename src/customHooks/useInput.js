import { useState } from "react"

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    input: {
      value,
      onChange: (e) => {
        setValue(e.target.value)
      },
    },
    clear: () => setValue('') 
  }
}

export default useInput
