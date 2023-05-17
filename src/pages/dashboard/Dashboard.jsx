import { useCollection } from "../../hooks/useCollection";
import { Container, Row, Spacer } from "@nextui-org/react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import "./Dashboard.css";
import Layout from "layout/Layout";
import { generateCode } from "utils/openai";

const Dashboard = () => {
  const { document, error } = useCollection("projects");
  const [filter, setFilter] = useState("All");
  const { user } = useAuthContext();
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");

  async function handleClick() {
    const generatedCode = await generateCode(prompt);
    setCode(generatedCode);
  }

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
            return project.category === filter.toLowerCase();
          default:
            return true;
        }
      })
    : null;

  return (
    <Layout>
      <Container gap={0}>
        {/* <div>
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <button onClick={handleClick}>Generate Code</button>
          <pre>{code}</pre>
        </div> */}
        <ProjectFilter projectsFilter={projectsFilter} filter={filter} />
        <Spacer y={1} />
        <Row gap={1}>{document && <ProjectList project={projects} />}</Row>
        {error && <div>{error}</div>}
      </Container>
    </Layout>
  );
};

export default Dashboard;
