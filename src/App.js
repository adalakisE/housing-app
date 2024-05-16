import { BrowserRouter } from "react-router-dom";
import Router from "src/router/Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Router />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
