import "./App.css";
import HappyOnam from "./components/HappyOnam";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HappyOnam/>} />
          <Route path="/:friend/:myname/:messaget/" element={<HappyOnam/>} />
          <Route path="*" element={<HappyOnam/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
