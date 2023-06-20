import { Link } from "react-router-dom";

export default function Navd({Algorithms, Codes, Consulting}) {
  return (
    <div>
      <nav className="servicesnav">

          <hr></hr>
          <Link className="link2 black" to={Algorithms}> Machine and Deep Learning Algorithms </Link>
          
          <div className="black">
          <h4> 🦿 Machine Learning </h4>

            <p className="tiny">🌘 Problem Solving (predictions) using Machine Learning Algorithms </p>
            <p className="tiny">🌖Model Training & Fine-Tuning | Diagnostics: Testing, Debugging and Perfecting! </p>
            <p className="tiny">🌕Model Use for Development - Models from TensorFlow.js Hub for Developers </p>
        
          <h4>🦿 Types of Learning Algorithms</h4>

            <h5> 🦾Supervised Learning </h5>
            <p className="tiny">Linear Regression | Logistic Regression | Binary, Multiclass, & Multilabel Classification | Deep Learning</p>
            <h5> 🦾Unsupervised Learning </h5>
            <p className="tiny">Recommender Systems | Reinforcement Learning</p>
        
            </div>

            <hr></hr>
            <Link className="link2 black" to={Codes}> Software Engineering </Link>
            <div className="black">
            <p className="tiny">Front-End Development: Code Websites using React.js  and other compatible frameworks</p>
            <p className="tiny">Backend Development: Data Seeding, Modeling, etc. with MongoDB and Django </p>
            </div>

            <hr></hr>
            <Link className="link2 black" to={Consulting}> Project Consulting </Link>
            <div className="black">
            <p className="tiny">Project Scope Management</p>
            <p className="tiny">Troubleshooting | Debugging </p>
            </div>
            <hr></hr>
      </nav>
    </div>
  );
}