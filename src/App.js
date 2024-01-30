import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import PhotoPage from './pages/PhotoPage';

function App() {

  // Overarching App with routes to other "pages"
  return (
    <Router>
      <div className="App">
        <header>Peking Chinese Restaurant</header>
        <br></br>
        <nav className="pages">
          <Link to="/"><button>Home</button></Link>
          <Link to="/menu"><button>Menu</button></Link>
          <Link to="/photos"><button>Photos</button></Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/photos" element={<PhotoPage />} />
        </Routes>
        <footer>
          <p>© Peking Chinese Restaurant</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
