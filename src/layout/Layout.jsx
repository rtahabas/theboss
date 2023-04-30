import { Col, Container, Row } from "@nextui-org/react";
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
          <Col span={2}>
            <Sidebar />
          </Col>
          <Col span={10}>{children}</Col>
          {/* <Col span={2}>
            <OnlineUsers />
          </Col> */}
        </Row>
      </Box>
    </Container>
  );
};

export default Layout;
