
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
import detailCommand from "./pages/DetailCommand";
import DetailCommand from "./pages/DetailCommand";


function App() {
  return (
      <AuthProvider>
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
                  </Route>
              </Routes>
          </Router>
      </AuthProvider>
  );
}

export default App;
