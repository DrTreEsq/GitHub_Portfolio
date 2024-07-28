import { Link } from "react-router-dom";

export default function Nav({Home, Aboutme , Services, Projects, Contact, Tutorials}) {
  return (
    <div>
      <nav>
          <Link className="link white" to={Home}> Home <img  src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Aboutme}> About Me <img  src="https://i.postimg.cc/ydJFrB1P/IMG-1486.avif" alt="robot"></img> </Link>
          <Link className="link white" to={Services}> Services <img  src="https://i.postimg.cc/gjqVhnwr/d3871fb68bb5c11b3585aa3e61d6b7b3.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Projects}> Projects <img  src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Contact}> Contact <img  src="https://i.postimg.cc/ydJFrB1P/IMG-1486.avif" alt="robot"></img> </Link>
          <Link className="link white" to={Tutorials}> Tutorials <img  src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
      </nav>
    </div>
  );
}

/*
className="homenav"
          <Link className="link white" to={Home}> Home <img className="navrobot" src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Aboutme}> About Me <img className="navrobot" src="https://i.postimg.cc/ydJFrB1P/IMG-1486.avif" alt="robot"></img> </Link>
          <Link className="link white" to={Services}> Services <img className="navrobot" src="https://i.postimg.cc/gjqVhnwr/d3871fb68bb5c11b3585aa3e61d6b7b3.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Projects}> Projects <img className="navrobot" src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
          <Link className="link white" to={Contact}> Contact <img className="navrobot" src="https://i.postimg.cc/ydJFrB1P/IMG-1486.avif" alt="robot"></img> </Link>
          <Link className="link white" to={Tutorials}> Tutorials <img className="navrobot" src="https://i.postimg.cc/kGmTbr5M/IMG-0551.jpg" alt="robot"></img> </Link>
*/
