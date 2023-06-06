import { Link } from "react-router-dom";

export default function Navs({Education, Skills}) {
  return (
    <div>
      <nav className="aboutmenav">
          <Link className="link" to={Education}>| Education |</Link>
          <Link className="link" to={Skills}> Skills |</Link>
      </nav>
    </div>
  );
}