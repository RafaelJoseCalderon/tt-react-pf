import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartProvider from "./context/cart_context";

import PrivateRute from "./components/private_route";
import ScrollToTop from "./components/scroll_to_top";

import Header from "./components/header";
import Footer from "./components/footer";

import Products from "./pages/products";
import Offers from "./pages/offers";
import NewArrivals from "./pages/new_arrivals";
import Product from "./pages/product";
import ShopingCart from "./pages/shopping_cart";

import Contact from "./pages/contact";
import About from "./pages/about";

import Login from "./pages/login";
import Admin from "./pages/admin";
import NotFound from "./pages/not_found";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route index element={<Products />} />
            <Route path="offers" element={<Offers />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
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
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
