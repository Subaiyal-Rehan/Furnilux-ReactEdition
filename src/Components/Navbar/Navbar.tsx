import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid navbarContainer">
      <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex text-decoration-none">
            <span className="text-green fs-4 fw-bolder">furniLux</span>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center gap-3 mb-md-0">
          <li>
            <a
              href="#"
              className="nav-link border-bottom border-black text-green px-2"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-green px-2">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-green px-2">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-green px-2">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-green px-2">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <a href="/" className="text-green text-decoration-none fw-bold me-3">Login</a>
          <a href="/" className="signupBtn text-decoration-none fw-bold">Sign-Up</a>
        </div>
      </header>
    </div>
  );
}
