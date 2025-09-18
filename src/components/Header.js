import logo from "../components/images/logo.webp";

function Header() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="logo">
              <img src={logo} class="img-fluid" alt="logo" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <nav className="navbar navbar-expand-lg" role="navigation">
              <input id="main-menu-state" type="checkbox" />
              <label className="main-menu-btn" htmlFor="main-menu-state">
                <span className="main-menu-btn-icon"></span> Toggle main menu
                visibility
              </label>
              <ul id="main-menu" class="sm sm-blue">
                <li>
                  <a href="/about" class="basic-3">
                    About
                  </a>
                </li>
                <li>
                  <a href="/socialimpact" class="basic-3">
                    Social Impact
                  </a>
                </li>
                <li>
                  <a href="/contact" class="basic-3">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
