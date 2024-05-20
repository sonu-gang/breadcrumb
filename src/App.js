import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetail from "./pages/product-detail";
import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Shopping Store</h1>
        <Breadcrumbs/>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;