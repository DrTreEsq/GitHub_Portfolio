import { Link } from "react-router-dom";

export default function Nav({Home, Aboutme , Services, Projects, Contact, Tutorials}) {
  return (
    <div>
      <nav className="homenav">
          <Link className="link white" to={Home}> Home </Link>
          <Link className="link white" to={Aboutme}> About Me </Link>
          <Link className="link white" to={Services}> Services </Link>
          <Link className="link white" to={Projects}> Projects </Link>
          <Link className="link white" to={Contact}> Contact </Link>
          <Link className="link white" to={Tutorials}> Tutorials </Link>
      </nav>
    </div>
  );
}
