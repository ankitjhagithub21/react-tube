
import "./App.css"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Watch from "./components/Watch"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/watch" element={<Watch/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App