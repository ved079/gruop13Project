import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Checkout from "./pages/Checkout";
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmation from "./pages/OrderConfirm";
import { OrderHistory } from "./pages/OrderHistory";

function App() {
  console.log("App without Redux rendered");

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
