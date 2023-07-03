import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed3 = ({ embedId}) => (
  <div>
    <iframe
      className="video-responsive"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed3.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed3;