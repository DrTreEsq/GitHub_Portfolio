import { Link } from "react-router-dom";

export default function Nav({Home, Aboutme , Contact, Services, Tutorials}) {
  return (
    <div>
      <nav className="homenav">
          <Link className="link" to={Home}>| Home | </Link>
          <Link className="link" to={Aboutme}> About Me |</Link>
          <Link className="link" to={Services}> Services |</Link>
          <Link className="link" to={Contact}> Contact |</Link>
          <Link className="link" to={Tutorials}> Tutorials |</Link>
      </nav>
    </div>
  );
}