import { useState } from "react";
import employeeData from "../../data/data.js";
import List from "./List";
import Header from "./Header";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header />
          <List />
        </>
      )}
    </div>
  );
};

export default Dashboard;
