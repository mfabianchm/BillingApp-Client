import "./App.css";

import { Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Routes>
        <Route path="/" element={<h1>Hola Mundo</h1>} />
      </Routes>
    </div>
  );
}

export default App;
