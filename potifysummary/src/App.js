import logo from './logo.svg';
import './App.css';
import Main from './Pages/main.js';
import Home from './Pages/home.js';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Main/>
      <Home/>
    </div>
  );
}

export default App;
