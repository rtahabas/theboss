import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useLogin } from "hooks/useLogin";
import "./Login.css";
import { Button, Col, Container, Input, Loading, Row, Text } from "@nextui-org/react";
import { Box } from "components/Box/Box";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    login(email, password);
    <Redirect to={"/"} />;
  };

  return (
    <Container xl>
      <Row>
        <Col span={12}>
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100vw",
              height: "100vh",
              gap: "2rem",
              "@xs": {
                flexDirection: "column",
              },
              "@sm": {
                flexDirection: "column",
              },
              "@md": {
                flexDirection: "row",
              },
              "@lg": {
                flexDirection: "row",
              },
            }}
          >
            <Box className="login">
              <Box>
                <Text
                  h1
                  size={60}
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                  weight="bold"
                >
                  Let's
                </Text>
                <Text
                  h1
                  size={60}
                  css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                  }}
                  weight="bold"
                >
                  Make the
                </Text>
                <Text
                  h1
                  size={60}
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                  weight="bold"
                >
                  Projects
                </Text>
              </Box>
            </Box>
            <Box>
              <form onSubmit={handleSubmit}>
                <label>
                  <Input
                    type="email"
                    required
                    value={email}
                    underlined
                    labelPlaceholder="Email"
                    color="secondary"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  <Input.Password
                    required
                    value={password}
                    underlined
                    labelPlaceholder="Error"
                    color="warning"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <Box>
                  {!isPending && (
                    <Button type="submit" bordered color="gradient" auto>
                      Login
                    </Button>
                  )}
                </Box>
                {isPending && (
                  <Button disabled auto bordered color="success" css={{ px: "$13" }}>
                    <Loading type="points" color="currentColor" size="sm" />
                  </Button>
                )}
                {error && <p className="error">{error}</p>}
              </form>
              <Box>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </Box>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
