import { Link } from "react-router-dom";

export default function Navs({Education, Skills, Projects}) {
  return (
    <div>
      <nav className="aboutmenav">
          <Link className="link black" to={Education}> Education and Work History </Link>
          <Link className="link black" to={Skills}> Skills </Link>
          <Link className="link black" to={Projects}> Projects in Progress </Link>
      </nav>
    </div>
  );
}