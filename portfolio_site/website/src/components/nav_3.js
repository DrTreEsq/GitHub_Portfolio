import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting, Data}) {
  return (
    <div>
      <nav className="servicesnav">
        
          <Link className="link2" to={Algorithms}> Machine and Deep Learning Algorithms </Link>
            <p>Neural Network Architecture</p>
            <p>Making inferences on other models</p>
            <p>Model Training & Fine-Tuning | Testing </p>
            <p>Model Use for Development </p>
          

   
          <Link className="link2" to={Codes}> Software Engineering </Link>
            <p>Front-End Development</p>
            <p>Backend Development </p>
     

      
          <Link className="link2" to={Consulting}> Project Consulting </Link>
            <p>Project Scope Management</p>
            <p>Troubleshooting | Debugging </p>
        


          <Link className="link2" to={Data}> Data Analysis coming soon... </Link>
    
      </nav>
    </div>
  );
}