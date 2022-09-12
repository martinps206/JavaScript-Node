import Characters from "./components/Characters";
import Header from "./components/Header";
import "./main.scss";
import "./components/Header.css";

function App() {
  return (
    <>
      <Header title="Rick & Morty API" />
      <Characters />
    </>
  );
}
export default App;
