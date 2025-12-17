import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import Homepage from "./Pages/Homepage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
