import { Avatar, Card } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import "./ProjectComments.css";

const ProjectComments = ({ project }) => {
  return (
    <div>
      <h3>Project Comments</h3>
      <ul className="project-comments-card-list">
        {project.comments.length > 0 &&
          project.comments.map((comment) => {
            return (
              <li key={comment.id}>
                <Card
                  isHoverable
                  css={{
                    mb: "1rem",
                  }}
                >
                  <Card.Body>
                    <h4>
                      <Avatar src={comment.photoURL} />
                      {comment.displayName}
                    </h4>
                    <p>{comment.content}</p>
                    <span>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</span>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProjectComments;
