import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      setData(await response.json());
    } catch (e) {
      setIsError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isLoading, isError };
}
