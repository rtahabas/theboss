import { Navbar } from "@nextui-org/react";

import "./ProjectFilter.css";

const filterList = ["All", "Mine", "Development", "Design", "Marketing", "Sales"];

const ProjectFilter = ({ filter, projectsFilter }) => {
  return (
    <div className="project-filter">
      <Navbar isBordered variant="sticky">
        <Navbar.Content>
          {filterList.map((filterList) => {
            return (
              <Navbar.Link
                onPress={() => projectsFilter(filterList)}
                isActive={filter === filterList ? true : false}
                key={filterList}
              >
                {filterList}
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default ProjectFilter;
