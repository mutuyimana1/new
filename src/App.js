import Home from "./components/Home";
import CallButton from "./components/CallButton";
import Calculate from "./components/calculate";
function App() {
  function clicked() {
    alert("hello");
  }
  return (
    <div>
      <CallButton />
      <Calculate />

      {/* <div className="cards">
        <Home clickOnMe={clicked} color="red" />
        <Home clickOnMe={clicked} color="blue" />
        <Home clickOnMe={clicked} color="yellow" />
        <Home clickOnMe={clicked} color="green" />
        <Home clickOnMe={clicked} color="gray" />
        <Home clickOnMe={clicked} color="gray" />
      </div> */}
    </div>
  );
}

export default App;
