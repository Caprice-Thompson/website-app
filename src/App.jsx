import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Calculator from "./pages/Calculator/Calculator";
import Timer from "./pages/Timer/Timer";
import ToDoList from "./pages/ToDoList/ToDoList";
import QuizApp from "./pages/Quiz/QuizApp";
import TicTacToeApp from "./pages/TicTacToe/TicTacToeApp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/tic-tac-toe" element={<TicTacToeApp />} />
        <Route path="/portfolio/calculator" element={<Calculator />} />
        <Route path="/portfolio/timer" element={<Timer />} />
        <Route path="/portfolio/todo-list" element={<ToDoList />} />
        <Route path="/portfolio/quiz" element={<QuizApp />} />
      </Routes>
    </div>
  );
}
export default App;
