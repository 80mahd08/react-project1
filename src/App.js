import "./css/main.css"
import "./css/FHF.css"

import Header from "./components/Header";

function App() {
  return (
    <>
      {/* start header*/}
      <Header />
      {/* end header*/}
      {/* start transform*/}
      <section className="transform">
        <div className="textCont">
          <h2 className="h1">Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brans
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <a href="#">learn more</a>
        </div>
        <div className="image resBackgImg" />
      </section>
      {/* start stand out*/}
      <section className="standOut">
        <div className="imageStanOut resBackgImg" />
        <div className="textCont">
          <h2 className="h1">Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a className="aStandOut" href="">
            learn more
          </a>
        </div>
      </section>
      {/* end stand out*/}
      {/* start image chan*/}
      <section className="imageChan">
        <div className="imageLeft resBackgImg">
          <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="imageRight resBackgImg">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
      {/* end image chan*/}
    </>
  );
}

export default App;

