import { Col, Container, Grid, Row } from "@nextui-org/react";
import OnlineUsers from "pages/components/OnlineUsers/OnlineUsers";
import Sidebar from "pages/components/Sidebar/Sidebar";
import "./Layout.css";
import { Box } from "components/Box/Box";
import Navigation from "pages/components/Navbar/Navigation";

const Layout = ({ children }) => {
  return (
    <Container gap={0}>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Navigation />
        <Row
          css={{
            height: "calc(100vh - 76px)",
          }}
        >
          <Grid.Container>
            <Grid xs={0} md={2}>
              {" "}
              <Sidebar />{" "}
            </Grid>
            <Grid xs={12} md={10}>
              {children}
            </Grid>
          </Grid.Container>
        </Row>
      </Box>
    </Container>
  );
};

export default Layout;
