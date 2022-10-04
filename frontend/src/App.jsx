import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { List } from "./pages/list/List";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
