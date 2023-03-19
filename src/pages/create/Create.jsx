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
  const [users, setUsers] = React.useState("");
  const [assignedUser, setAssignedUser] = React.useState([]);
  const [formError, setFormError] = React.useState(null);

  React.useEffect(() => {
    if (document) {
      const options = document.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [document]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a category");
      return;
    }

    if (assignedUser.length < 1) {
      setFormError("Please assign the project to at least 1 user ");
      return;
    }
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
          <Select options={users} onChange={(option) => setAssignedUser(option)} isMulti />
        </label>
        <Button type="submit">Add Project</Button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
export default Create;
