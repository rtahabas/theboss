import { Button, Col, Row, Textarea } from "@nextui-org/react";
import { useAuthContext } from "hooks/useAuthContext";
import { useFirestore } from "hooks/useFirestore";
import { useState } from "react";
import "./ProjectNewComment.css";
import { Box } from "components/Box/Box";
import { timestamp } from "firebase/config";

const ProjectNewComment = ({ project }) => {
  const [comments, setComments] = useState("");
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("projects");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.random(),
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: comments,
      createdAt: timestamp.fromDate(new Date()),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, newComment],
    });

    if (!response.error) {
      setComments("");
    }
  };

  return (
    <Col span={12}>
      <Row>
        <Box className="project-comments">
          <form onSubmit={handleSubmit}>
            <h3 className="project-comments-title">Add new comment:</h3>
            <Textarea
              css={{ width: "100%" }}
              required
              value={comments}
              label="Write your thoughts"
              placeholder="Enter your amazing ideas."
              onChange={(e) => setComments(e.target.value)}
            />
            <Button
              css={{
                mt: "1rem",
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Row>
    </Col>
  );
};

export default ProjectNewComment;
