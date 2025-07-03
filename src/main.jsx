import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/bootstrap-icons.min.css";
import "./index.css";

import CartProvider from "./context/cart_provider";
import AuthProvider from "./context/auth_provider";
import NotifProvider from "./context/notification_provider";
import ScrollToTop from "./components/scroll_to_top";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <CartProvider>
          <NotifProvider>
            <App />
          </NotifProvider>
        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
