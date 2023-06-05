import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting, Data}) {
  return (
    <div>
      <nav className="servicesnav">
        <ul>
        <li>
          <Link className="link2" to={Algorithms}> Machine and Deep Learning Algorithms </Link>
          </li>

          <li>
          <Link className="link2" to={Codes}> Software Engineering </Link>
          </li>

          <li>
          <Link className="link2" to={Consulting}> Project Consulting </Link>
          </li>

          <li>
          <Link className="link2" to={Data}> Data Analysis </Link>
          </li>
          </ul>
      </nav>
    </div>
  );
}