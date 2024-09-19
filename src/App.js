import Debugmate from "debugmate"; // Caminho para o arquivo debugmate.js

const debugmate = new Debugmate();

function App() {
  // const handleClick = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todosdawd/1')
  //   .catch(error => debugmate.publish(error));
  // };

  function generateError() {
    throw new Error('Erro de teste');
}

  return (
    <div>
      <h1>React Application</h1>
      {/* <ComponentNotExistsForTesting/> */}
      <button onClick={() => notExistsFunction()}>Click me</button>

    </div>
  );
}

export default App;
