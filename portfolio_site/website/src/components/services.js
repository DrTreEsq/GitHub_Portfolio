import  Navd  from "./nav_3.js";

export default function Home() {
  return (
      <div>
        <h1>SERVICES</h1>

        <Navd className="services_nav" Algorithms="/algorithms"  Codes="/codes" Consulting="/consulting" Data="/data"/>
        
      </div>
    )
  }