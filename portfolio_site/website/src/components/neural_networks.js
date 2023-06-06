import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed2 = ({ embedId, embedId2, embedId3}) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

  <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId2}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

  <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId3}`}
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