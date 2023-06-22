import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav, Home, Aboutme, Algorithms, Codes, Consulting, Contact, Education, Skills, Services, Tutorials, YoutubeEmbed, YoutubeEmbed2, YoutubeEmbed3} from './components/index.js'
import './App.css';
//import axios from "axios";

function App() {
  //Api();

  return (
    <div className="App">
      <Nav Home="/" Aboutme="/aboutme" Algorithms="/algorithms" Codes="/codes" Consulting="/consulting" Contact="/contact" Education="/education" Skills="/skills" Services="/services"
      Tutorials="/tutorials" YoutubeEmbed="/hardware" YoutubeEmbed2="neural_networks" YoutubeEmbed3="/production"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<Aboutme />}/>
        <Route path="/algorithms" element={<Algorithms />}/> 
        <Route path="/codes" element={<Codes />}/>
        <Route path="/consulting" element={<Consulting />}/> 
        <Route path="/contact" element={<Contact />}/> 
        <Route path="/education" element={<Education />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/services" element={<Services />}/> 
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/hardware" element={<YoutubeEmbed embedId="Utwnm2kjYAM" embedId3="4SA6t_tcFQA"/>} />
        <Route path="/neural_networks" element={<YoutubeEmbed2 embedId2="_c_x8A3mNDk"/>} />
        <Route path="/production" element={<YoutubeEmbed3 embedId="NgWujOrCZFo"/>} />
        <Route path="/post" />
      </Routes>


      <form action="../../" method="post" className="form">
      <button type="submit">Connected?</button>
      </form>


    </div>
  );
}


export default App;
