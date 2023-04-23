import React from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Signup.css";
import { Button, Col, Container, Input, Loading, Row, Text } from "@nextui-org/react";
import { Box } from "components/Box/Box";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState(null);
  const [thumbnailError, setThumbnailError] = React.useState(null);
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
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
            <form onSubmit={handleSubmit}>
              <label>
                <Input
                  underlined
                  labelPlaceholder="Email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <Input.Password
                  labelPlaceholder="Password"
                  type="password"
                  required
                  underlined
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                <Input
                  type="text"
                  underlined
                  labelPlaceholder="User Name"
                  required
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </label>
              <label>
                <Input type="file" underlined required labelPlaceholder="Profile Picture" onChange={handleFileChange} />
                {thumbnailError && <div> {thumbnailError}</div>}
              </label>
              {!isPending && (
                <Button type="submit" bordered color="gradient" auto>
                  Sign Up!
                </Button>
              )}
              {isPending && (
                <Button disabled auto bordered color="success" css={{ px: "$13" }}>
                  <Loading type="points" color="currentColor" size="sm" />
                </Button>
              )}
              {error && <div className="error">{error}</div>}
            </form>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
