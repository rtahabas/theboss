import { Button, Card, Navbar } from "@nextui-org/react";

import "./ProjectFilter.css";
import { Box } from "components/Box/Box";

const filterList = ["All", "Mine", "Development", "Design", "Marketing", "Sales"];

const ProjectFilter = ({ filter, projectsFilter }) => {
  return (
    <Box className="project-filter">
      <Box className="filter-list">
        {filterList.map((filterList) => {
          return (
            <Button
              bordered
              shadow
              color="gradient"
              auto
              onPress={() => projectsFilter(filterList)}
              isActive={filter === filterList ? true : false}
              key={filterList}
            >
              {filterList}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectFilter;
