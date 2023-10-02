import { BrowserRouter } from "react-router-dom";
import View from "./components/View";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <View />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
