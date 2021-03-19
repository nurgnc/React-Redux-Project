import React from 'react';
//Routing
import {BrowserRouter as Router} from 'react-router-dom';
// Components
import Header from './components/Header'
import Section from './components/Section'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Section />
      </Router>
    </div>
  );
}

export default App;
