import Container from "./HeaderComponents/Container";

function Header(props) {
  return (
    <header className="resBackgImg">
      <Container creatorName = { props.creatorName }/>
    </header>
  );
}

export default Header;



