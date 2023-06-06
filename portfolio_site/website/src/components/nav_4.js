import { Link } from "react-router-dom";

export default function Nave({YoutubeEmbed, YoutubeEmbed2, YoutubeEmbed3}) {
  return (
    <div>
      
      <nav className="tutorialsnav">
    

          <Link className="link2" to={YoutubeEmbed}> Making Your Machine Ready To Learn </Link>
  
          <Link className="link2" to={YoutubeEmbed3}> AI | Machine Learning for Web Apps </Link>

          <Link className="link2" to={YoutubeEmbed2}> Neural Networks in TensorFlow </Link>
   

      </nav>
    </div>
  );
}