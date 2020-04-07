import React, { useMemo } from "react";

interface Props {
  url: string;
}

function getId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const YoutubeVideo: React.FC<Props> = ({ url }) => {
  const id = useMemo(() => getId(url), [url]);

  return (
    <iframe
      title="Video instruction"
      width="100%"
      height="315"
      src={`//www.youtube.com/embed/${id}`}
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
