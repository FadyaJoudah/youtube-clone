import "./NextVideos.scss";

function NextVideos({ videoList }) {
  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEO</p>
      {videoList.map((video) => {
        return (
          <div key={video.id} className="next-video">
            <img src={video.image} className="next-video__thumbnail" alt="" />
            <div className="next-video__details details ">
              <p className="details__title">{video.title}</p>
              <p className="details__channel">{video.channel}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default NextVideos;
