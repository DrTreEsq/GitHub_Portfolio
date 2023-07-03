import { Link } from "react-router-dom";

export default function Nave({YoutubeEmbed, YoutubeEmbed2, YoutubeEmbed3}) {
  return (
    <div>
      
      <nav className="tutorialsnav">
    

          <Link className="link2 " to={YoutubeEmbed}> Making Your Machine Ready To Learn </Link>
  
          <Link className="link2" to={YoutubeEmbed3}> AI for Production </Link>

          <Link className="link2" to={YoutubeEmbed2}> Neural Networks </Link>
   

      </nav>
    </div>
  );
}