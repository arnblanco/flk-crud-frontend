import { Navigate, Route, Routes } from "react-router-dom"
import { NysePage } from "../pages"

export const NyseRoute = () => {
  return (
    <Routes>
        <Route path="/" element={ <NysePage /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
