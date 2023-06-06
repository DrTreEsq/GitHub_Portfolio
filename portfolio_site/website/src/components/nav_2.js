import { Link } from "react-router-dom";

export default function Navs({Education, Skills, Projects}) {
  return (
    <div>
      <nav className="aboutmenav">
          <Link className="link" to={Education}>| Education |</Link>
          <Link className="link" to={Skills}> Skills |</Link>
          <Link className="link" to={Projects}> Projects |</Link>
      </nav>
    </div>
  );
}