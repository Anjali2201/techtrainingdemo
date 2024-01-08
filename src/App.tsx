import "./App.css";
import Home from "./components/home";
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
