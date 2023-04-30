import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Avatar from "../Avatar/Avatar";

import "./Sidebar.css";
import { Text } from "@nextui-org/react";
import OnlineUsers from "../OnlineUsers/OnlineUsers";

const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <Text>Hello! {user.displayName}</Text>
          <Text> {user.email}</Text>
        </div>
        <nav className="links">
          {/* <ul>
            <li>
              <NavLink exact to="/">
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <span>New Project</span>
              </NavLink>
            </li>
          </ul> */}
          <OnlineUsers />
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
