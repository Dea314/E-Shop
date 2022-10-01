import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserOrders from "./pages/user/UserOrders";
import UserProfile from "./pages/user/UserProfile";
import UserCartDetails from "./pages/user/UserCartDetails";
import UserOrderDetails from "./pages/user/UserOrderDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import UserChat from "..src/components/user/UserChat";
import RoutesWithUserChat from "./components/user/RoutesWithUserChat";

// protected admin pages

import AdminUsers from "./pages/admin/AdminUsers";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";
import AdminEditUsers from "./pages/admin/AdminEditUser";
import AdminEditProducts from "./pages/admin/AdminEditProduct";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";
import AdminChats from "./pages/admin/AdminChats";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<RoutesWithUserChat />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element="Page not found 404" />
        </Route>

        {/* protected user routes */}

        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path="/user/orders" element={<UserOrders />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/user/cart-details" element={<UserCartDetails />} />
          <Route path="/user/order-details" element={<UserOrderDetails />} />
        </Route>

        {/* protected admin routes */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/edit-user" element={<AdminEditUsers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProduct />}
          />
          <Route path="/admin/edit-product" element={<AdminEditProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/order-details" element={<AdminOrderDetails />} />
          <Route path="/admin/chats" element={<AdminChats />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
