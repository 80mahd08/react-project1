import Header from "./components/Header";
import Transform from "./components/Transform";
import StandOut from "./components/StandOut";
import ImageChan from "./components/ImageChan";

function App() {
  return (
    <> 
      {/* start header*/}
      <Header creatorName="mahdi amari"/>
      {/* end header*/}
      {/* start transform*/}
      <Transform />
      {/* start stand out*/}
      <StandOut />
      {/* end stand out*/}
      {/* start image chan*/}
      <ImageChan />
      {/* end image chan*/}
    </>
  );
}

export default App;
