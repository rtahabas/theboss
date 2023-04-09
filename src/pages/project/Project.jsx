import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";

const Project = () => {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  console.log(document);

  if (error) {
    return <div className="error"> {error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading Document...</div>;
  }

  return (
    <div>
      {document.name}adsasdasd
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
};

export default Project;
