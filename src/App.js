import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Comp from './components/Comp';
import Contact from './components/Contact';


function App() {
  return (
	<>
		<Routes>
			   <Route  index path='/'  element={<Comp />} />
			   <Route path='/contact' redirect element={<Contact />} />
		</Routes>
	</>
    
  );
}

export default App;
