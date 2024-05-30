import logo from './logo.svg';
import './App.css';
import Home from './Screen/Home';
import {Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
