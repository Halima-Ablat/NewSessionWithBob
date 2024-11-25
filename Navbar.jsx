import profile from "./assets/react.png";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={profile} alt="React logo" className="ps-3 me-3 custom-img" />
        <p className="fs-4">ReactFacts</p>
      </nav>
    </header>
  );
}
export default Navbar;
