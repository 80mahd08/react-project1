import ContentPart from "./ContentPart";
import Nav from "./Nav";
import TopPart from "./TopPart";

const Container = (props) => {
  return (
    <div className="container">
      <TopPart />
      <Nav />
      <ContentPart
        p={{
          creatorName: props.creatorName,
          class: "creatorName",
        }}
      />
    </div>
  );
};

export default Container;
