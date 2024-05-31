import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Carts from "./components/pages/Carts";
import "./App.css";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Cart" element={<Carts />} />
          </Route>
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
