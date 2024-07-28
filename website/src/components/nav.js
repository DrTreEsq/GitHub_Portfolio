import { Link } from "react-router-dom";

export default function Nav({Home, Aboutme , Services, Projects, Contact, Tutorials}) {
  return (
    <div>
      <nav className="homenav">
          <Link className="link white" to={Home}> Home <img className"navrobot" src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Aboutme}> About Me </Link>
          <Link className="link white" to={Services}> Services </Link>
          <Link className="link white" to={Projects}> Projects </Link>
          <Link className="link white" to={Contact}> Contact </Link>
          <Link className="link white" to={Tutorials}> Tutorials </Link>
      </nav>
    </div>
  );
}

/*
        <a href="https://github.com/DrTreEsq?tab=repositories"> <img className="robot" src="https://i.postimg.cc/ydJFrB1P/IMG-1486.avif" alt="robot"></img> </a>
        <a href="https://github.com/DrTreEsq?tab=repositories"> <img className="robot" src="https://i.postimg.cc/gjqVhnwr/d3871fb68bb5c11b3585aa3e61d6b7b3.jpg" alt="robot"></img> </a>
*/
