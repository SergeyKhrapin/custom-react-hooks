import { useRef, useState } from "react"

function useFetch(url) {
  const [data, setData] = useState(null)
  const prevURL = useRef()

  const fetchData = async () => {
    // do not call the same URL again
    if (url && url !== prevURL.current) {
      const response = await fetch(url)
      setData(await response.json())
      prevURL.current = url
    }
  }

  return [fetchData, data]
}

export default useFetch
