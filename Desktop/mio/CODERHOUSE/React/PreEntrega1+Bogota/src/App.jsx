import "./App.css";
import {NavBar} from "./components/navbar/NavBar";
import {ItemListContainer} from "./components/Itemlistcontainer/ItemListContainer";

function App() {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <div className="container">
        <ItemListContainer greeting0={"First Slide"} greeting1={"Second Slide"} greeting2={"Third Slide"}/>
      </div>
    </>
  );
}

export default App;