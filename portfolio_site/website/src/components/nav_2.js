import { Link } from "react-router-dom";

export default function Navs({Education, Skills}) {
  return (
    <div>
      <nav className="aboutmenav">
          <Link className="link" to={Education}> EDUCATION </Link>
          <Link className="link" to={Skills}> SKILLS </Link>
      </nav>
    </div>
  );
}