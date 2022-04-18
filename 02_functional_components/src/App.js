import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <>
      <Header />
      <Home content="Do You Wanna Add TODO ?"/>
      <Header /> {/*  we can use components multiple times */}
      <Home />
    </>
  );
}

export default App;
