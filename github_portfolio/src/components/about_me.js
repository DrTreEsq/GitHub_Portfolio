import  Navs  from "./nav_2.js";

export default function Aboutme() {
  return (
      <div>
        <hr></hr>
        <h1 className="title">The Ethical Mad Scientist</h1>
        <Navs Education="/education" Skills="/skills" Projects="/projects"/>
        <h6 className="black">Welcome, Earthling! My name is Trey and I am an educator and forever student with a goal of learning each valuable skill necessary to pioneer the change that I wish to see in the world.
          I have a wide range of abilities stemming from my diverse work background, education, and additional academic interests ranging from neuroscience, programming, to the history of mankind and more.
          I hope to continually gain experience to grow myself professionally and offer the same to the organizations that I work with as I work towards a greater goal of personal development and global change.
          </h6>
        <img className="example" src="https://i.postimg.cc/xjvnSwnq/mx05abasr3s01.jpg" align="center" alt="treytheurkel"></img>
        
      </div>
    )
  }