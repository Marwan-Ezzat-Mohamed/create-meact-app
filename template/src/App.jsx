import Meact from "marwan-meact.js";

function App() {
  const [counter, setCounter] = Meact.useState(1);

  return (
    <div style="display: flex; flex-direction: row;">
      <button
        onClick={() => {
          setCounter((old) => {
            return old + 1;
          });
        }}
      >
        {counter}
      </button>
    </div>
  );
}

export default App;
