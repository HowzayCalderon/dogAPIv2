import "./App.css";
import { Route, Routes } from "react-router-dom";
import Husky from "./Pages/Husky";
import Pug from "./Pages/Pug";
import Shiba from "./Pages/Shiba";
import Corgi from "./Pages/Corgi";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pugs" element={<Pug />} />
        <Route path="/shibas" element={<Shiba />} />
        <Route path="/huskies" element={<Husky />} />
        <Route path="/corgis" element={<Corgi />} />
      </Routes>
    </div>
  );
}

export default App;
