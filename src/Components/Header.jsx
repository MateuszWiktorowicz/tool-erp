import mastermetLogo from "../../public/mastermet-logo.png";


function Header({ token }) {
      const Logout = () => {
        sessionStorage.removeItem('token');
      };

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
            {token ? (
          <button type="button" className="btn btn-warning" onClick={Logout}>
            Logout
          </button>
        ) : (
          <button type="button" className="btn btn-warning me-2">
            Sign-up
          </button>
        )}           
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;