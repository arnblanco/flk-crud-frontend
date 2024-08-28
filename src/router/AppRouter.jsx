import { Route, Routes } from "react-router-dom"
import { NyseRoute } from "../nyse/route"
import { useCheckStocks } from "../hooks"
import { CheckingStocks } from "../ui/components/CheckingStocks"

export const AppRouter = () => {
  const checkingStocks = useCheckStocks()

  if ( checkingStocks ) {
    return <CheckingStocks />
  }

  return (
    <Routes>
        <Route path="/*" element={ <NyseRoute /> } />
    </Routes>
  )
}
