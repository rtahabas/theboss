import { useCollection } from "../../hooks/useCollection";
import { Container, Row, Spacer } from "@nextui-org/react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { document, error } = useCollection("projects");
  const [filter, setFilter] = useState("All");
  const { user } = useAuthContext();

  const projectsFilter = (filter) => {
    setFilter(filter);
  };

  const projects = document
    ? document.filter((project) => {
        switch (filter) {
          case "All":
            return true;
          case "Mine":
            let assignedToMe = false;
            project.assignedUserList.filter((member) => {
              if (member.id === user.uid) {
                return (assignedToMe = true);
              }
            });
            return assignedToMe;
          case "Development":
          case "Design":
          case "Marketing":
          case "Sales":
            return project.category === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <Container gap={0}>
      <ProjectFilter projectsFilter={projectsFilter} filter={filter} />
      <Spacer y={1} />
      <Row gap={1}>{document && <ProjectList project={projects} />}</Row>
      {error && <div>{error}</div>}
    </Container>
  );
};

export default Dashboard;
