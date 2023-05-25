import { Link } from "react-router-dom";
import { Navbar, Link as NextLink, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { useLogout } from "hooks/useLogout";
import "./Navigation.css";
import { useAuthContext } from "hooks/useAuthContext";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const collapseItems = [
    {
      link: "/",
      name: "Dashboard",
    },
    {
      link: "/create",
      name: "Create New Project",
    },
  ];

  return (
    <Navbar isBordered variant="sticky" maxWidth={"fluid"}>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link to="/" color="inherit" hideIn="xs">
          The BOSS
        </Link>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight activeColor="secondary" hideIn="xs" variant="highlight-rounded">
        <NavLink className="navigation-links" to="/">
          Dashboard
        </NavLink>
        {"    "}
        <NavLink className="navigation-links" to="/create">
          Create New Project
        </NavLink>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Navbar.Content>
          <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} />
        </Navbar.Content>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              {user && <Avatar bordered as="button" color="secondary" size="md" src={user.photoURL} />}
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              {user && (
                <>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as {user.displayName}
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {user.email}
                  </Text>
                </>
              )}
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              {!isPending && (
                <button className="transparent-button" onClick={logout}>
                  Logout
                </button>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              to={item.link}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
