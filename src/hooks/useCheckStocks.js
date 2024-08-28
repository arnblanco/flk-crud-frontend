import { useEffect } from "react"
import { useNyseStore } from "./useNyseStore"
import { useFetch } from "./useFetch";

export const useCheckStocks = () => {
  const { checkingStocks, loadInitialStocks } = useNyseStore()
  const { response, error, loading } = useFetch({ method: 'GET', url: '/api/companies/' });

  useEffect(() => {
    if (response) {
      loadInitialStocks ( response )
    }
  }, [response]);

  return checkingStocks
}
