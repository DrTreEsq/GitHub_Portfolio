import  Nav  from "./nav.js";

export default function Home() {
  return (
      <div>

        <Nav className="home_nav" Aboutme="/aboutme"  Services="/services" Contact="/contact"/>
        
      </div>
    )
  }