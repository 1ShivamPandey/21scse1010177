import logo from "./logo.svg";
import "./App.css";
import Home from "./Screen/Home";
import Header from "./Component/Header";
import FilteredProduct from "./Screen/filteredProduct";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filteredProduct" element={<FilteredProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
