import { Link } from "react-router-dom";

export default function Nave({Hardware, Production, Neural}) {
  return (
    <div>
      
      <nav className="tutorialsnav">
        <ul>

        <li>
          <Link className="link" to={Hardware}> Making Your Machine Ready To Learn </Link>
          </li>

          <li>
          <Link className="link" to={Production}> AI | Machine Learning for Web Apps </Link>
          </li>

          <li>
          <Link className="link" to={Neural}> Neural Networks in TensorFlow </Link>
          </li>

          </ul>

      </nav>
    </div>
  );
}