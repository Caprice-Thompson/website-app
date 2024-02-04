import logo from './logo.svg';
import './App.css';
import Profile from './components/User';
import Search from './components/SearchBar';
import { useState } from 'react';
import FruitPicker from './components/Dropdown';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Search/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       <div>
      <h1>Welcome to my app</h1>
     
      <Profile/>
      <MyButton />
      <FruitPicker/>
    </div>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    // alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
      </button>
  );
}
export default App;
