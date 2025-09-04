import "./App.css";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import MenuBar from "./components/MenuBar/MenuBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import NotFound from "./pages/NotFound/NotFound";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Login from "./pages/Login/Login";

function App() {
  const location = useLocation();
  const { auth } = useContext(AppContext);

  const LoginRoute = ({ element }) => {
    if (auth.token) {
      return <Navigate to="/dashboard" replace />;
    }
    return element;
  };

  const ProtectedRoute = ({ element, allowedRoles }) => {
    if (!auth.token) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/dashboard" replace />;
    }

    return element;
  };

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/" && (
        <MenuBar />
      )}
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/orders" element={<OrderHistory />} />

        <Route
          path="/login"
          element={<LoginRoute element={<Login></Login>} />}
        />

        {/*Admin only routes*/}

        <Route
          path="/items"
          element={
            <ProtectedRoute
              element={<ManageItems />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute
              element={<ManageCategory />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute
              element={<ManageUsers />}
              allowedRoles={["ROLE_ADMIN"]}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
