import React from "react";
import { Button, Col, Container, Input, Row, Textarea } from "@nextui-org/react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";
import Layout from "layout/Layout";

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
  const history = useHistory();
  const { document } = useCollection("users");
  const [name, setName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [dueDetail, setDuedetail] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [users, setUsers] = React.useState("");
  const [assignedUser, setAssignedUser] = React.useState([]);
  const [formError, setFormError] = React.useState(null);
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("projects");

  React.useEffect(() => {
    if (document) {
      const options = document.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [document]);

  const handleSubmit = async (e) => {
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

    const createdBy = {
      name: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUserList = assignedUser.map((selectedUsers) => {
      return {
        name: selectedUsers.value.displayName,
        photoURL: selectedUsers.value.photoURL,
        id: selectedUsers.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDetail)),
      comments: [],
      createdBy,
      assignedUserList,
    };
    await addDocument(project);
    if (!response.error) {
      history.push("/");
    }
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col span={12}>
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Project Name:</span>
                <Input width="100%" type="text" required onChange={(e) => setName(e.target.value)} value={name} />
              </label>
              <label>
                <span>Project Details:</span>
                <Textarea
                  width="100%"
                  type="text"
                  required
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                />
              </label>
              <label>
                <span>Set Due Date:</span>
                <Input
                  width="100%"
                  type="date"
                  required
                  onChange={(e) => setDuedetail(e.target.value)}
                  value={dueDetail}
                />
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
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
export default Create;
