const List = ({ employees }) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div>
      <table className="contain-table">
        <thead className="striped-table">
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{currencyFormatter.format(employee.salary)}</td>
                <td>{employee.date}</td>
                <td>
                  <button className="button muted-button">Edit</button>
                </td>
                <td>
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <p></p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
