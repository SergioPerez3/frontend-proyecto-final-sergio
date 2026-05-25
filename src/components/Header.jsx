import Natbar from "./Navbar";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="header-content container">
          <div className="header-item">Logo</div>
          <Natbar />
        </div>
      </header>
    </>
  );
}

export default Header;
