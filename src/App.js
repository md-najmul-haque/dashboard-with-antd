import './App.css';
import Login from './components/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <h2>Dashboard with AntD</h2>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div >
  );
}

export default App;
