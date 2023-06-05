import  Navd  from "./nav_3.js";

export default function Home() {
  return (
      <div>
        <h1>SERVICES</h1>
        <a className="github" href="https://github.com/TREYCSE/GitHub_Portfolio">GitHub PortFolio README.md NOTE FOR for Engineers: Click here for code samples, etc.</a>
        <Navd Algorithms="/algorithms"  Codes="/codes" Consulting="/consulting" Data="/data"/>
        
      </div>
    )
  }