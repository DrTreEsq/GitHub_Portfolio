import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting, Data}) {
  return (
    <div>
      <nav className="servicesnav">
          <Link className="link" to={Algorithms}> Algorithms</Link>
          <Link className="link" to={Codes}> Codes </Link>
          <Link className="link" to={Consulting}> Consulting </Link>
          <Link className="link" to={Data}> Data </Link>
      </nav>
    </div>
  );
}