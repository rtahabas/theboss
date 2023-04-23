import { Badge, User } from "@nextui-org/react";
import { useCollection } from "../../../hooks/useCollection";
import Avatar from "../Avatar/Avatar";
import "./OnlineUsers.css";

const OnlineUsers = () => {
  const { document, error } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error} </div>}
      {document &&
        document.map((user) => (
          <div key={user.id} className="user-list-item">
            <User src={user.photoURL} name={user.displayName} bordered color={user.online ? "success" : "error"} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
