import mastermetLogo from "../../public/mastermet-logo.png";

function Header() {
    return(
        <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-around justify-content-lg-between">
            <div>
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={mastermetLogo} alt="Mastermet Logo"  className="me-2" />
            </a>
            </div>
        
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning me-2">Sign-up</button>
              <button type="button" className="btn btn-warning">Logout</button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;