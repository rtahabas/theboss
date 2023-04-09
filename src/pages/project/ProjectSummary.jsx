import { Card, Col, Avatar } from "@nextui-org/react";

const ProjectSummary = ({ project }) => {
  console.log(project);

  return (
    <div>
      {project.length === 0 && <div>No project yet!</div>}
      <Col key={project.id}>
        <Card isHoverable variant="bordered">
          <Card.Body>
            <h4>{project.name}</h4>
            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            <div>
              <p className="details">{project.details}</p>
              <ul>
                {project.assignedUserList.map((user) => {
                  return <li key={user.photoURL}>{<Avatar src={user.photoURL} />}</li>;
                })}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProjectSummary;
