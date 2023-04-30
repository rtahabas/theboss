import { User, Text } from "@nextui-org/react";
import { useCollection } from "../../../hooks/useCollection";

import "./OnlineUsers.css";

const OnlineUsers = () => {
  const { document, error } = useCollection("users");

  return (
    <div className="user-list">
      <Text h2>Users</Text>
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
