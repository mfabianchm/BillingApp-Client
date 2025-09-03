import "./App.css";

import { Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Explore from "./pages/explore/Explore";
import ManageCategory from "./pages/manage_category/ManageCategory";
import ManageItems from "./pages/manage_items/ManageItems";
import ManageUsers from "./pages/manage_users/ManageUsers";

function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
