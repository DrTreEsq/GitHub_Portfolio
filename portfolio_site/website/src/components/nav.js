import { Link } from "react-router-dom";

export default function Nav({Aboutme , Contact, Services}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Aboutme}> ABOUT ME </Link>
          <Link to={Contact}> CONTACT </Link>
          <Link to={Services}> SERVICES </Link>
      </nav>
    </div>
  );
}