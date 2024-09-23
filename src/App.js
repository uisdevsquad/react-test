import TriggerEventError from "./components/TriggerEventError";
import TriggerNetworkError from "./components/TriggerNetworkError";
import TriggerPromiseRejection from "./components/TriggerPromiseRejection";
import TriggerReferenceError from "./components/TriggerReferenceError";
import TriggerSyntaxError from "./components/TriggerSyntaxError";
import TriggerTypeError from "./components/TriggerTypeError";

function App() {

  function generateError() {
    throw new Error('Erro de teste');
  }

  return (
    <div>
      <h1>React Application</h1>
      <button onClick={generateError}>Click me</button>
      <br />
      <br />
      {/* <TriggerEventError /> */}
      {/* <TriggerNetworkError /> */}
      {/* <TriggerPromiseRejection /> */}
      <TriggerReferenceError />
      {/* <TriggerSyntaxError /> */}
      {/* <TriggerTypeError /> */}
    </div>
  );
}

export default App;
