import logo from './logo.svg';
import './App.css';
import Main from './Pages/main.js'
import Home from './Pages/home.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import"./Fonts/JejuMyeongjo-Regular.ttf"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Main />} />
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
