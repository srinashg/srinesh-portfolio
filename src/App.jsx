import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Intro from './pages/Intro';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router> {/*routes to different webpages within the same web application - reducing the need for multiple different websites */}
      <Routes> {/*list of webpages - wrapped under a Router object */}
        <Route path="/" element={<Homepage />} /> {/*path given in a string, element in <Page/>, where Page is a webpages under the pages folder */}
        <Route path="/intro" element={<Intro />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;