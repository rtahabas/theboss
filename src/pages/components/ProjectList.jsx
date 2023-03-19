import { Card, Col, Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function ProjectList({ project }) {
  return (
    <>
      {project.length === 0 && <div>No project yet!</div>}
      {project.map((project) => {
        return (
          <Col key={project.id}>
            <Card isHoverable variant="bordered">
              <Card.Body>
                <Link to={`/projects/${project.id}`}  size={15} css={{ m: 0 }}>
                  <h4>{project.name}</h4>
                  <p>Due by {project.dueDate.toDate().toDateString()}</p>
                  <div>
                    <ul>
                      {project.assignedUserList.map((user) => {
                        return <li key={user.photoURL}>{<Avatar src={user.photoURL} />}</li>;
                      })}
                    </ul>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
}
