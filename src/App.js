import './App.css';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';

// pages
import Landing from './Landing';
import About from './About';
import Sidekick from './projects/Sidekick';
import Guides from './projects/Guides';
import DocsResearch from './projects/DocsResearch'
import Publications from './Publications';
import Locked from './Locked';


function App() {
  const [auth, setAuth] = useState(false)

  const updateAuth = (value) => {
    setAuth(value)
  }

  return (
    <div className="App">

      { auth ? 
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />}/>
          <Route path="/about" exact element={<About />}/>
          <Route path="/sidekick" exact element={<Sidekick />}/>
          <Route path="/guides" exact element={<Guides />}/>
          <Route path="/docsresearch" exact element={<DocsResearch />}/>
          <Route path="/publications" exact element={<Publications />}/>
        </Routes>
      </Router>
      : 
      <Locked updateAuth={updateAuth}/>
      }
    </div>
  );
}

export default App;
