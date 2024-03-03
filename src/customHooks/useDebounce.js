import {useState} from "react"

const useDebounce = (fetchCountries, delay) => {
  const [suggestions, setSuggestions] = useState([])
  
  let timerId

  const func = (value) => {
    clearTimeout(timerId)

    timerId = setTimeout(async () => {
      if (value) {
        const response = await fetchCountries(value)
        const countries = await response.json()
        setSuggestions(countries)
      } else {
        setSuggestions([])
      }
    }, delay)
  }

  return [func, suggestions]
}

console.log('master - commit 1');

export default useDebounce
