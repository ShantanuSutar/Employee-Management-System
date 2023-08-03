import { useState } from "react";
import employeeData from "../../data/data.js";
import List from "./List";
import Header from "./Header";
import Add from "./Add.jsx";
import Edit from "./Edit.jsx";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleEdit() {
    setIsEditing(true);
  }
  function handleDelete(id) {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName} has been deleted.`,
          showConfirmButton: false,
          timer: 2000,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  }
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
