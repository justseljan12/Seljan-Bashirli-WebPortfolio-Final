import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

const App = () => {
  return (
    <div className="app-shell text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

