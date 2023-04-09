import { useCollection } from "../../hooks/useCollection";
import { Container, Row, Col, Spacer } from "@nextui-org/react";
import "./Dashboard.css";
import ProjectList from "../components/ProjectList/ProjectList";

const Dashboard = () => {
  const { document, error } = useCollection("projects");

  return (
    <Container gap={0}>
      <Spacer y={1} />
      <Row gap={1}>{document && <ProjectList project={document} />}</Row>
      {error && <div>{error}</div>}
    </Container>
  );
};

export default Dashboard;
