import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

const Project = () => {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return <div className="error"> {error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading Document...</div>;
  }

  return <div>{document.name}</div>;
};

export default Project;
