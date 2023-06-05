import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting, Data}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Algorithms}> </Link>
          <Link to={Codes}> </Link>
          <Link to={Consulting}>  </Link>
          <Link to={Data}> </Link>
      </nav>
    </div>
  );
}