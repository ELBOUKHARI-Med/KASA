import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Container from '../Layout/Container';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Accommodation from '../Pages/Accommodation';
import ErrorPage from '../Pages/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Accommodation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
