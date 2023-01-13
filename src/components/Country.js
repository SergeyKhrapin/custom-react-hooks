import {useCallback, useEffect, useState} from "react"
import useDebounce from "../customHooks/useDebounce"

const Country = () => {
  const [country, setCountry] = useState("")

  const [debounce, countries] = useDebounce(async (value) => {
    return await fetch(`https://restcountries.com/v2/name/${value}`)
  }, 500)

  const fetchSuggestions = useCallback((val) => debounce(val), [])

  useEffect(() => {
    fetchSuggestions(country)
  }, [country])

  const handleChange = (e) => setCountry(e.target.value)

  return (
    <form>
      <input onChange={handleChange} placeholder="Search country" />
      <ul id="suggestions">
        {countries?.map(country => (
          <li key={country.alpha2Code}>{country.name}</li>
        ))}
      </ul>
    </form>
  )
}

export default Country
