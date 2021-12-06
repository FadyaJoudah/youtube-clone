import "./Avatar.scss";
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar-img" />;
}

export default Avatar;
