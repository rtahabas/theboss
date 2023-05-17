import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";
import Layout from "layout/Layout";
import { Col, Container, Grid, Loading, Row } from "@nextui-org/react";
import { Box } from "components/Box/Box";
import ProjectNewComment from "./ProjectNewComment";

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
      <Grid.Container>
        <Grid xs={12} sm={12} lg={6}>
          <Container>
            <ProjectSummary project={document} />
            <ProjectNewComment project={document} />
          </Container>
        </Grid>
        <Grid xs={12} sm={12} lg={6}>
          <Container>
            <ProjectComments project={document} />
          </Container>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default Project;
