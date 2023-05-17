import { Card, Col, Avatar, Button, Row } from "@nextui-org/react";
import { useAuthContext } from "hooks/useAuthContext";
import { useFirestore } from "hooks/useFirestore";
import { useHistory } from "react-router-dom";
import "./ProjectSummary.css";

const ProjectSummary = ({ project }) => {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const history = useHistory();

  const handleDelete = () => {
    deleteDocument(project.id);
    history.push("/");
  };

  return (
    <>
      {project.length === 0 && <div>No project yet!</div>}
      <Row>
        <Col key={project.id}>
          <h3>Project Detail</h3>
          <Card variant="bordered" css={{ mw: "500px" }}>
            <Card.Body>
              <h4>{project.name}</h4>
              <p>This project created by{project.createdBy.name}</p>
              <p>Due by {project.dueDate.toDate().toDateString()}</p>
              <div>
                <p className="details">{project.details}</p>
                <ul className="assigned-users">
                  {project.assignedUserList.map((user) => {
                    return <li key={user.photoURL}>{<Avatar src={user.photoURL} />}</li>;
                  })}
                </ul>
              </div>
              {user.uid === project.createdBy.id && <Button onClick={handleDelete}>Mark as complete</Button>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProjectSummary;
