// import logo from "./logo.svg";
import "./App.css";
import DailyFacts from "./components/jokes";
import Bored from "./components/bored";
import Home from "./components/home";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jokes" element={<DailyFacts />} />
            <Route path="bored" element={<Bored />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
