
import './styles/App.css';
import Layout from "./layout/Layout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Coffee from "./pages/Coffee";
import Tea from "./pages/Tea";
import Accessories from "./pages/Accessory";


function App() {
  return <Router>
      <Routes>
          <Route path={"/"} element={<Layout/>}>
          <Route index element={<Home />} />
              <Route path={"produit/:id"} element={<ProductDetails/>} />
              <Route path={"produits/cafes"} element={<Coffee/>} />
              <Route path={"produits/thes"} element={<Tea/>} />
              <Route path={"produits/accessoires"} element={<Accessories/>} />


          </Route>
      </Routes>
  </Router>
}

export default App;
