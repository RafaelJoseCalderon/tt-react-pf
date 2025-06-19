import { Route, Routes } from "react-router-dom";

import PrivateRute from "./components/private_route";

import Notification from "./components/notification";
import LoadingOverlay from "./components/loading_overlay";
import Header from "./components/header";
import Footer from "./components/footer";

import Products from "./pages/products";
import Product from "./pages/product";
import ShopingCart from "./pages/shopping_cart";

import Contact from "./pages/contact";
import About from "./pages/about";

import Login from "./pages/login";
import Admin from "./pages/admin";

import NotFound from "./pages/not_found";

function App() {
  return (<>
    <Header><Notification /></Header>
    <main>
      <LoadingOverlay />
      <Routes>

        <Route index element={
          <Products
            title="Productos"
          />}
        />

        <Route path="offers" element={
          <Products
            title="Ofertas"
            category="men's clothing"
          />}
        />

        <Route path="new-arrivals" element={
          <Products
            title="Novedades"
            category="jewelery"
          />}
        />

        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<ShopingCart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />
        <Route path="admin" element={
          <PrivateRute><Admin /></PrivateRute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;
