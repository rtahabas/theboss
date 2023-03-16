import './Avatar.css'

const Avatar = ({ src }) => {
  return (
    <div className="avatar">
      <img src={src} alt="user-photo" />
    </div>
  );
};

export default Avatar;
