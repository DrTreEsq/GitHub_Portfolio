import  Navd  from "./nav_3.js";
import './services.css';

export default function Services() {
  return (
      <div className="services">
        
        <h2> Services </h2>
        <h5> click for code samples, results, summaries, visuals, and more </h5>
        <Navd Algorithms="/algorithms"  Codes="/codes" Consulting="/consulting" Data="/data"/>
        <a className="github" href="https://github.com/TREYCSE/GitHub_Portfolio">GitHub PortFolio README.md for Engineers: Click here for code samples, etc.</a>
        
      </div>
    )
  }