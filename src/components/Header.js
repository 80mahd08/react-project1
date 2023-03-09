function Header() {
    return(
        <header className="resBackgImg">
        <div className="container">
          <div className="top-part">
            <div className="logo">
              <img src="../images/logo.svg" style={{ opacity: 1  ,  width: 150 }} alt="logo" />
            </div>
            <div className="navLogo">
              <span className="lines">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </span>
            </div>
          </div>
          <nav className="dispNone">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
            <a className="contactBtn" href="#">
              CONTACT
            </a>
          </nav>
          <div className="content-part">
            <div className="headerCont">
              <h1>WE ARE CREATIVES</h1>
              <img src="../images/arrow.svg" alt="alt" />
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;