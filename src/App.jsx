import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav className="no-space center-align">
          <button className="border left-round">
            <span>Button</span>
          </button>
          <button className="border no-round">
            <span>Button</span>
          </button>
          <button className="border right-round fill">
            <span>Button</span>
          </button>
        </nav>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="yellow"
          onClick={async () => {
            let colors = await materialDynamicColors("#ffd700");
            for (const variable in colors.dark) {
              if (variable) {
                document.body.style.setProperty(
                  "--" + variable,
                  colors.dark[variable]
                );
              }
            }
          }}
        >
          Turn your site Yellow
        </button>
        <button
          className="purple"
          onClick={async () => {
            let colors = await materialDynamicColors("#9c27b0");
            for (const variable in colors.dark) {
              if (variable) {
                document.body.style.setProperty(
                  "--" + variable,
                  colors.dark[variable]
                );
              }
            }

            //Get the value of the --primary css variable on the body
            //getComputedStyle(document.body).getPropertyValue('--primary');
          }}
        >
          Turn your site Purple
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
