import React from "react";  //useState, useEffect } 
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Nav, Home, Aboutme, Algorithms, Codes, Consulting, Contact, Data, Education, Skills, Services, Tutorials, YoutubeEmbed, YoutubeEmbed2, YoutubeEmbed3} from './components/index.js'
import './App.css';

//use HashRouter to fix manual reloading? - make sure to import up top, change keywords below, and change from BrowserRouter in index.js

function App() {
  return (
    <div className="App">
      <Nav Home="/" Aboutme="/aboutme" Algorithms="/algorithms" Codes="/codes" Consulting="/consulting" Contact="/contact" Data="/data" Education="/education" Skills="/skills" Services="/services"
      Tutorials="/tutorials" YoutubeEmbed="/hardware" YoutubeEmbed2="neural_networks" YoutubeEmbed3="/production"/>

        <HashRouter basename="/app">
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<Aboutme />}/>
        <Route path="/algorithms" element={<Algorithms />}/> 
        <Route path="/data" element={<Data />}/> 
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
        </Routes>
        </HashRouter>


    </div>
  );
}


export default App;


/* non-static option
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => res.json())
      .then((data) => setMessage(message));
  }, []);

//fetch failing - get API from node server.
*/

