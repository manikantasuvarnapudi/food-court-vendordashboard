import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
