import { useState } from "react";
import employeeData from "../../data/data.js";
import List from "./List";
import Header from "./Header";
import Add from "./Add.jsx";
import Edit from "./Edit.jsx";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleEdit() {
    setIsEditing(true);
  }
  function handleDelete() {}
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && <Edit />}
    </div>
  );
};

export default Dashboard;
