

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Expense Tracker</h2>
      <div className="nav-right">
        <span className="user">Hello, User</span>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;