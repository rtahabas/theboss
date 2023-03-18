import React from "react";
import { Button } from "@nextui-org/react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
const categories = [
  {
    value: "development",
    label: "Development",
  },
  {
    value: "design",
    label: "Design",
  },
  {
    value: "sales",
    label: "Sales",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
];

function Create() {
  const { document } = useCollection("users");
  const [name, setName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [dueDetail, setDuedetail] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [assignedUser, setAssignedUser] = React.useState([]);

  console.log(document);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDetail, category.value);
  };

  return (
    <div>
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input type="text" required onChange={(e) => setName(e.target.value)} value={name} />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea type="text" required onChange={(e) => setDetails(e.target.value)} value={details} />
        </label>
        <label>
          <span>Set Due Date:</span>
          <input type="date" required onChange={(e) => setDuedetail(e.target.value)} value={dueDetail} />
        </label>
        <label>
          <span>Project Category:</span>
          <Select options={categories} onChange={(option) => setCategory(option)} />
        </label>
        <label>
          <span>Assign to :</span>
        </label>
        <Button type="submit">Add Project</Button>
      </form>
    </div>
  );
}
export default Create;
