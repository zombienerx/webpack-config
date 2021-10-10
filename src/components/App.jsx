import "./../styles/index.scss";
import Recipes from "./Recipes"
import sword from "./../images/swc-sword.png";
import swordSvg from "./../images/sword.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, react</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img src={swordSvg} alt="swordSvg" width="250" />
        <Recipes />
      </main>
    </>
    )
  }

  export default App