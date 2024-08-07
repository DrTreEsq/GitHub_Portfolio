import  Navs  from "./nav_2.js";

export default function Aboutme() {
  return (
      <div className="aboutme">
        <hr></hr>
        <Navs Education="/education" Skills="/skills" Projects="/projects"/>
        
        <p className="aboutrow">
        <img className="meimg" src="https://i.postimg.cc/9QnRRJJ3/IMG-6355.jpg" alt="that's me right there!"></img>
        
        <h3 className="black"> Welcome, Earthling! My name is Tre and I am an Educator, Lifelong Learner, and Interdisciplinery Researcher with a goal of learning each valuable skill necessary to pioneer the change that I wish to see in the world.
        I hope to continually gain experience to grow myself professionally and offer the same to the organizations that I work with as I work towards a greater goal of personal development and global change.
        On track to be Tenured Professor (currently teaching k-12), Attorney (in law school), Biohacker (combining knowledge of human body and computer science to advance human medicine over the next decade or so),
        Biomedical Engineer (bringing something to market soon - stay tuned), Clinical Geneticist/Doctor (med school starts after company launch), Computational Neuroscientist (taking online courses, dissertation in progress, starting degree with med school),
        and that's enough about me! Reach out and tell me about yourself🤩! </h3>
        </p>
    
      </div>
    )
  }
