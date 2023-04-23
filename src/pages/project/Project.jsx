import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";
import Layout from "layout/Layout";
import { Col, Loading, Row } from "@nextui-org/react";
import { Box } from "components/Box/Box";

const Project = () => {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return (
      <Layout>
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Text> {error} </Text>
        </Box>
      </Layout>
    );
  }

  if (!document) {
    return (
      <Layout>
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {" "}
          Loading
          <Loading type="points" />
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Row>
        <Col span={6}>
          <ProjectSummary project={document} />
        </Col>
        <Col span={6}>
          <ProjectComments project={document} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Project;
