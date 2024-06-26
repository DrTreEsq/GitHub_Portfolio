import  Navs  from "./nav_2.js";

export default function Aboutme() {
  return (
      <div>
        <hr></hr>
        <Navs Education="/education" Skills="/skills" Projects="/projects"/>
        
        <h3 className="black"> Welcome, Earthling! My name is Tre and I am an Educator, Lifelong Learner, and Interdisciplinery Researcher with a goal of learning each valuable skill necessary to pioneer the change that I wish to see in the world.
        I hope to continually gain experience to grow myself professionally and offer the same to the organizations that I work with as I work towards a greater goal of personal development and global change.
        </h3>
    
    <br/>
    
        <h4 className="black"> On track to be Educator (currently teaching), Attorney (in law school), Biohacker (combining knowledge of human body and computer science to advance human medicine over the next decade or so), Biomedical Engineer (bringing something to market soon - stay tuned), Doctor (med school starts after company launch), Neuroscientist (dissertation in progress, starting degree with med school) </h4>
        <img className="example" src="https://i.postimg.cc/xjvnSwnq/mx05abasr3s01.jpg" align="center" alt="treytheurkel"></img>
        
      </div>
    )
  }
