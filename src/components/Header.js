import logo from "../images/logo.svg";
import arrow from "../images/arrow.svg";

function Header(props) {
  return (
    <header className="resBackgImg">
      <div className="container">
        <div className="top-part">
          <div className="logo">
            <img
              src={logo}
              style={{
                opacity: 1,
                width: "150px",
              }}
              alt="logo"
            />
          </div>
          <div className="navLogo">
            <span className="lines" onClick={ showNavBar } >
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
          <a className="contactBtn" href={`#${delspace(props.jobTitle)}`}>
            CONTACT
          </a>
        </nav>
        <div className="content-part">
          <div className="headerCont">
            <h1
              style={{
                textTransform: "uppercase",
              }}
            >
              WE ARE CREATIVES
            </h1>
            <img src={arrow} alt="alt" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

function showNavBar() {
  document.querySelector("nav").classList.toggle('dispNone')
  document.querySelector('.lines').classList.toggle('menuLogo');
}

function delspace(str) {
  return str.split(" ").filter((ele)=> ele !== " ").join("-")
}