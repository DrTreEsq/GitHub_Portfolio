import { Link } from "react-router-dom";

export default function Nave({Hardware, Production, Neural}) {
  return (
    <div>
      
      <nav className="tutorialsnav">
    

          <Link className="link2" to={Hardware}> Making Your Machine Ready To Learn </Link>
  
          <Link className="link2" to={Production}> AI | Machine Learning for Web Apps </Link>

          <Link className="link2" to={Neural}> Neural Networks in TensorFlow </Link>
   

      </nav>
    </div>
  );
}