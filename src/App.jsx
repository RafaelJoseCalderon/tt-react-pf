import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Products from "./pages/products";
import Offers from "./pages/offers";
import NewArrivals from "./pages/new_arrivals";
import Product from "./pages/product";
import ShopingCart from "./pages/shopping_cart";

import Contact from "./pages/contact";
import About from "./pages/about";

import NotFound from "./pages/not_found";

function App() {
  // shopping cart
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev;
      } else {
        const cents = Math.round(product.price * 100);
        return [...prev, { ...product, price: cents, quantity: 1 }];
      }
    });
  };

  const delToCart = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  // end shopping cart

  return (
    <BrowserRouter>
      <Header items={items} />
      <main>
        <Routes>
          <Route index element={<Products addItem={addItem} />} />
          <Route path="offers" element={<Offers addItem={addItem} />} />
          <Route path="new-arrivals" element={<NewArrivals addItem={addItem} />} />
          <Route path="product/:id" element={<Product addItem={addItem} />} />
          <Route path="cart" element={<ShopingCart items={items} delToCart={delToCart} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
