import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../Navbar/NavBar.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Register from '../Navbar/Register.jsx';
import Login from '../Navbar/Login.jsx';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Homepage /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
