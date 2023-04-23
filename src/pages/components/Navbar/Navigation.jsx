// import { Link } from "react-router-dom";
// import { useAuthContext } from "../../../hooks/useAuthContext";
// import { useLogout } from "../../../hooks/useLogout";

// const Navigation = () => {
//   const { logout, isPending } = useLogout();
//   const { user } = useAuthContext();

//   return (
//     <nav className="navbar">
//       <ul>
//         <li className="logo">
//           {/* <img src="" alt="theboss" /> */}
//           <Link to="/">The Boss</Link>
//         </li>
//         {!user && (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Signup</Link>
//             </li>
//           </>
//         )}
//         {user && (
//           <li>
//             {!isPending && (
//               <button className="btn" onClick={logout}>
//                 Logout
//               </button>
//             )}
//             {isPending && (
//               <button className="btn" disabled>
//                 Logging out..
//               </button>
//             )}
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
import { Navbar, Link, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { useLogout } from "hooks/useLogout";
import "./Navigation.css";

export default function Navigation() {
  const { logout, isPending } = useLogout();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
        <Text b color="inherit" hideIn="xs">
          The BOSS
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight activeColor="secondary" hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
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
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
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
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
