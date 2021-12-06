import "./VideoDetails.scss";

function VideoDetails({
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) {
  const timeFormat = new Date(timestamp).toLocaleDateString("en-US");
  return (
    <>
      <section className="video-details">
        <h1 className="video-details__title">{title}</h1>
        <div className="video-details__container">
          <div className="video-details__left left">
            <p className="left__info left__info--bold">By {channel}</p>
            <p className="left__info">{timeFormat}</p>
          </div>
          <div className="video-details__right right">
            <p className="right__info">
              <i className="video-details__view-icon"></i>
              {likes}
            </p>
            <p className="right__info">
              <i className="video-details__like-icon"></i>
              {views}
            </p>
          </div>
        </div>
        <div className="video-details__description">{description}</div>
      </section>
      <section></section>
    </>
  );
}

export default VideoDetails;
