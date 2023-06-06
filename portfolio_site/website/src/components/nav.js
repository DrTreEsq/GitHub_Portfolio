import { Link } from "react-router-dom";

export default function Nav({Home, Aboutme , Contact, Services, Tutorials}) {
  return (
    <div>
      <nav className="homenav">
          <Link className="link white" to={Home}>| Home | </Link>
          <Link className="link white" to={Aboutme}> About Me |</Link>
          <Link className="link white" to={Services}> Services |</Link>
          <Link className="link white" to={Contact}> Contact |</Link>
          <Link className="link white" to={Tutorials}> Trey Teaches Tech!</Link>
      </nav>
    </div>
  );
}