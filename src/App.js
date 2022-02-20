import "./App.scss";

import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";

function App() {
  return (
    <div className="App">
      <AnalogClock />
      <DigitalClock />
    </div>
  );
}

export default App;
