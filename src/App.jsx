import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resources from "./pages/Resources/Resources";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Calculator from "./pages/Calculator/Calculator";
import Timer from "./pages/Timer/Timer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/portfolio/calculator" element={<Calculator />} />
        <Route path="/portfolio/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}
export default App;
