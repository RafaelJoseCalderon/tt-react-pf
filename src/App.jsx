import { Outlet, Route, Routes } from "react-router-dom";

import ProductsResouces from "./context/products_resouces";
import PrivateRute from "./components/private_route";

import LoadingOverlay from "./components/loading_overlay";
import Header from "./components/header";
import Footer from "./components/footer";

import Products from "./pages/products";
import Product from "./pages/product";
import ShopingCart from "./pages/shopping_cart";

import Contact from "./pages/contact";
import About from "./pages/about";

import Login from "./pages/login";
import ProductsAdmin from "./pages/products_admin";
import ProductAdmin from "./pages/product_admin";

import NotFound from "./pages/not_found";

function App() {
  return (<>
    <Header />
    <main>
      <LoadingOverlay />
      <Routes>

        {/* Products */}
        <Route index element={
          <Products title="Productos" />}
        />
        <Route path="offers" element={
          <Products title="Ofertas" category="offers" />}
        />
        <Route path="new-arrivals" element={
          <Products title="Novedades" category="new-arrivals" />}
        />
        <Route path="product/:id" element={<Product />} />
        {/* Products */}

        {/* Protected routes */}
        <Route path="admin" element={
          <ProductsResouces>
            <PrivateRute><Outlet /></PrivateRute>
          </ProductsResouces>
        }>
          <Route index element={
            <ProductsAdmin />
          } />
          <Route path="details/:id" element={
            <ProductAdmin mode="view" title="Detalle" />}
          />
          <Route path="edit/:id" element={
            <ProductAdmin mode="update" title="Editar" />}
          />
          <Route path="create" element={
            <ProductAdmin mode="create" title="Crear" />}
          />
        </Route>
        {/* End protected routes */}

        <Route path="cart" element={<ShopingCart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>);
}

export default App;
