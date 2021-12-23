import "./Header.scss";

function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <button onClick={toggleSidebar}>toggle</button>Header
    </div>
  );
}

export default Header;
