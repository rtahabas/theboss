import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { logout, isPending } = useLogout();

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          {/* <img src="" alt="theboss" /> */}
          <Link to="/">The Boss</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out..
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
