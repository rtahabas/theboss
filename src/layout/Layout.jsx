import { Col, Container, Grid, Row } from "@nextui-org/react";
import OnlineUsers from "pages/components/OnlineUsers/OnlineUsers";
import Sidebar from "pages/components/Sidebar/Sidebar";
import "./Layout.css";
import { Box } from "components/Box/Box";
import Navigation from "pages/components/Navbar/Navigation";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Navigation />
        <Row>
          <Grid.Container
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              zIndex: 1,
            }}
          >
            <Grid xs={0} md={2}>
              {" "}
              <Sidebar />{" "}
            </Grid>
            <Grid xs={12} md={9}>
              {children}
            </Grid>
          </Grid.Container>
        </Row>
      </Box>
    </Container>
  );
};

export default Layout;
