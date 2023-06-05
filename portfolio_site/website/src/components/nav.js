import { Link } from "react-router-dom";

export default function Nav({Home, Aboutme , Contact, Services}) {
  return (
    <div>
      <nav className="homenav">
          <Link className="link" to={Home}> HOME </Link>
          <Link className="link" to={Aboutme}> ABOUT ME </Link>
          <Link className="link" to={Contact}> CONTACT </Link>
          <Link className="link" to={Services}> SERVICES </Link>
      </nav>
    </div>
  );
}