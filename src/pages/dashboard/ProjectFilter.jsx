import { Button, Card, Navbar } from "@nextui-org/react";

import "./ProjectFilter.css";
import { Box } from "components/Box/Box";

const filterList = ["All", "Mine", "Development", "Design", "Marketing", "Sales"];

const ProjectFilter = ({ filter, projectsFilter }) => {
  return (
    <Card className="project-filter">
      <Card.Body>
        <Box className="filter-list">
          {filterList.map((filterList) => {
            return (
              <Button
                onPress={() => projectsFilter(filterList)}
                isActive={filter === filterList ? true : false}
                key={filterList}
              >
                {filterList}
              </Button>
            );
          })}
        </Box>
      </Card.Body>
    </Card>
  );
};

export default ProjectFilter;
