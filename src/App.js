import './App.css';
import Login from './components/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Authentication/Register/Register';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div >
  );
}

export default App;
