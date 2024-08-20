import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About/About"
import Rooms from "./pages/Rooms/Rooms"
import Contact from "./pages/Contact/Contact"
function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
    
      
    </>
  )
}

export default App
