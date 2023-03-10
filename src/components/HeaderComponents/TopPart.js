import logo from "../../images/logo.svg";

const TopPart = () => {
  return (
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
        <span
          className="lines"
          onClick={() => {
            document.querySelector("nav").classList.toggle("dispNone");
            document.querySelector(".lines").classList.toggle("menuLogo");
          }}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </span>
      </div>
    </div>
  );
};

export default TopPart;
