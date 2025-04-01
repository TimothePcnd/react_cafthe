
import './styles/App.css';
import Layout from "./layout/Layout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Coffee from "./pages/Coffee";
import Tea from "./pages/Tea";
import Accessories from "./pages/Accessory";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Command from "./pages/Command";
import DetailCommand from "./pages/DetailCommand";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Cgv from "./pages/Cgv";
import Cgu from "./pages/Cgu";
import Politique from "./pages/Politique";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
      <AuthProvider>
          <CartProvider>
              <Router>
                  <Routes>
                      <Route path={"/"} element={<Layout/>}>
                      <Route index element={<Home />} />
                          <Route path={"produit/:id"} element={<ProductDetails/>} />
                          <Route path={"produits/cafes"} element={<Coffee/>} />
                          <Route path={"produits/thes"} element={<Tea/>} />
                          <Route path={"produits/accessoires"} element={<Accessories/>} />
                          <Route path={"login"} element={<Login />}/>
                          <Route path={"account"} element={<Account/>}/>
                          <Route path={"/commande/client/:id"} element={<Command />} />
                          <Route path={"/commande/:id"} element={<DetailCommand />} />
                          <Route path={"/client/register"} element={<Register />} />
                          <Route path={"/Panier"} element={<Cart />} />
                          <Route path={"/cgv"} element={<Cgv/>} />
                          <Route path={"/cgu"} element={<Cgu/>} />
                          <Route path={"/politique"} element={<Politique/>} />
                      </Route>
                  </Routes>
              </Router>
          </CartProvider>
      </AuthProvider>
  );
}

export default App;
