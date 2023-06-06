import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting, Data}) {
  return (
    <div>
      <nav className="servicesnav">

            <hr></hr>
          <Link className="link2 black" to={Algorithms}> Machine and Deep Learning Algorithms </Link>
          
          <div className="black">
            <p>Neural Network Architecture: draw up each layer and choose parameters to train the fit the model in TensorFlow</p>
            <p>Making inferences on other machine learning models: using code to train with other data</p>
            <p>Model Training & Fine-Tuning | Diagnostics: Testing, Debugging and Perfecting! </p>
            <p>Model Use for Development - Models from TensorFlow.js Hub for Developers </p>
            </div>

            <hr></hr>
            <Link className="link2 black" to={Codes}> Software Engineering </Link>
            <div className="black">
            <p>Front-End Development: Code Websites using React.js Framework</p>
            <p>Backend Development: Data Seeding, Modeling, etc. with MongoDB and Django </p>
            </div>

            <hr></hr>
            <Link className="link2 black" to={Consulting}> Project Consulting </Link>
            <div className="black">
            <p>Project Scope Management</p>
            <p>Troubleshooting | Debugging </p>
            </div>
            <hr></hr>

          <Link className="link2 black" to={Data}> Data Analysis coming soon... </Link>
    
      </nav>
    </div>
  );
}