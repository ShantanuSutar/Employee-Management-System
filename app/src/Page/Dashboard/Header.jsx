const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <button className="round-button" onClick={() => setIsAdding(true)}>
        Add Employee
      </button>
    </header>
  );
};

export default Header;
