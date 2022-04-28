import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '@mui/icons-material'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav />
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <Contact></Contact>
          )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
