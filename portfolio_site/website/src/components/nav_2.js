import { Link } from "react-router-dom";

export default function Navs({Educationpres, Educationpast}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Educationpres}> Current Education </Link>
          <Link to={Educationpast}> Previous Education </Link>
      </nav>
    </div>
  );
}