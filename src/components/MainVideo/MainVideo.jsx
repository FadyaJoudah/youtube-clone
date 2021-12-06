import "./MainVideo.scss";

function MainVideo({ src, src2, poster }) {
  return (
    <video className="main-video" poster={poster} controls>
      <source src={src} type="video/mp4" />
      <source src={src2} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
}

export default MainVideo;
