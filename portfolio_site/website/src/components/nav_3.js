import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting, Data}) {
  return (
    <div>
      <nav className="servicesnav">
      <hr></hr>
          <Link className="link2 black" to={Algorithms}> Machine and Deep Learning Algorithms </Link>
            <p>Neural Network Architecture</p>
            <p>Making inferences on other models</p>
            <p>Model Training & Fine-Tuning | Testing & Diagnostics</p>
            <p>Model Use for Development </p>
          

   <hr></hr>
          <Link className="link2 black" to={Codes}> Software Engineering </Link>
            <p>Front-End Development</p>
            <p>Backend Development </p>
     

            <hr></hr>
          <Link className="link2 black" to={Consulting}> Project Consulting </Link>
            <p>Project Scope Management</p>
            <p>Troubleshooting | Debugging </p>
        
            <hr></hr>

          <Link className="link2 black" to={Data}> Data Analysis coming soon... </Link>
    
      </nav>
    </div>
  );
}