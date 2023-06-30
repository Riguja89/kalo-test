import "./styles/App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProductsContainer from "./components/ProductsContainer";
import Instagram from "./components/Instagram";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Compras from "./components/Compras";
import CheckoutContainer from "./components/CheckoutContainer";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Nav /> 
              <Home />
              <ProductsContainer />
              <Instagram />
              <Newsletter />
              <Footer />
            </>
          }
        />

        <Route exact path="/productos/:productId" element={<ProductDetail />} />
        <Route exact path="/miscompras" element={<Compras />} />
        <Route exact path="/checkout" element={<CheckoutContainer />} />
        <Route exact path="/success" element={<SuccessPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
