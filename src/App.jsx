import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
