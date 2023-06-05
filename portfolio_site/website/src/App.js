import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav, Home, Aboutme, Algorithms, Codes, Consulting, Contact, Data, Education, Skills, Services} from './components/index.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav Home="/" Aboutme="/aboutme" Algorithms="/algorithms" Codes="/codes" Consulting="/consulting" Contact="/contact" Data="/data" Education="/education" Skills="/skills" Services="/services"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<Aboutme />}/>
        <Route path="/algorithms" element={<Algorithms />}/> 
        <Route path="/codes" element={<Codes />}/>
        <Route path="/consulting" element={<Consulting />}/> 
        <Route path="/contact" element={<Contact />}/> 
        <Route path="/data" element={<Data />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/services" element={<Services />}/> 
      </Routes>
    </div>
  );
}

export default App;
