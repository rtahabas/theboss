import { Card, Col, Avatar, Row, Button, Text } from "@nextui-org/react";
import { Box } from "components/Box/Box";
import { Link } from "react-router-dom";
import "./ProjectList.css";
const ProjectList = ({ project }) => {
  return (
    <>
      {project.length === 0 && <div>No project yet!</div>}
      {project.map((project) => {
        return (
          <Col key={project.id}>
            <Card isHoverable css={{ w: "100%" }}>
              <Card.Header css={{ zIndex: 1 }}>
                <Col>
                  <Text h3>{project.name}</Text>
                </Col>
              </Card.Header>

              <Card.Body css={{ p: 0 }}></Card.Body>

              <Card.Footer
                css={{
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Box>
                      <ul className="assigned-user">
                        {project.assignedUserList.map((user) => {
                          return <li key={user.photoURL}>{<Avatar src={user.photoURL} />}</li>;
                        })}
                      </ul>
                    </Box>
                    <Text color="#000" size={12}>
                      Due by {project.dueDate.toDate().toDateString()}
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button flat auto rounded color="secondary">
                        <Link to={`/projects/${project.id}`} size={15} css={{ m: 0 }}>
                          <Text css={{ color: "inherit" }} size={12} weight="bold" transform="uppercase">
                            View
                          </Text>
                        </Link>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default ProjectList;
