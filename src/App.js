import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Projects';


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
