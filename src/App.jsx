import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import Homepage from "./Pages/Homepage"
import JourneyPage from "./Pages/JourneyPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} />
          <Route path="/" index element={<Homepage />} />
          <Route path="/:id" element={<JourneyPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
