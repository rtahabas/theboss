import { Avatar, Button, Textarea } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import { timestamp } from "firebase/config";
import { useAuthContext } from "hooks/useAuthContext";
import { useFirestore } from "hooks/useFirestore";
import { useState } from "react";

const ProjectComments = ({ project }) => {
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
    <div>
      <h3>Project Comments</h3>

      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => {
            return (
              <li key={comment.id}>
                <div>
                  <h4>
                    <Avatar src={comment.photoURL} />
                    {comment.displayName}
                  </h4>
                  <p>{comment.content}</p>
                  <span>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</span>
                </div>
              </li>
            );
          })}
      </ul>
      <span>Add new comment:</span>
      <form onSubmit={handleSubmit}>
        <Textarea
          required
          value={comments}
          label="Write your thoughts"
          placeholder="Enter your amazing ideas."
          onChange={(e) => setComments(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ProjectComments;
