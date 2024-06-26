import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed2 = ({embedId3, embedId2}) => (
<div>
    <iframe 
      className="video-big"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId3}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  <iframe
      className="video-big"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId2}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed2.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed2;
