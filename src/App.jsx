import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Hola Mundo</h1>} />
      </Routes>
    </div>
  );
}

export default App;
