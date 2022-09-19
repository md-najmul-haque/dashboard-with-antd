import './App.css';
import Login from './components/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Authentication/Register/Register';

function App() {
  return (
    <div className="App">
      <h2>Dashboard with AntD</h2>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div >
  );
}

export default App;
