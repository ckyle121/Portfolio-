import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

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
    </div>

  );
}

export default App;
