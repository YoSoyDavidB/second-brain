import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Wrapper from "./Pages/Wrappe";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* register */}
        <Route path="/register" element={<Register />} />

        {/* login */}
        <Route path="/login" element={<Login />} />

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />

        {/* profile */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
