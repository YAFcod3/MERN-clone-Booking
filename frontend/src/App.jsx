import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel.jsx";
import { List } from "./pages/list/List";




function App() {



  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />

      </Routes>
    </div>
  );
}

export default App;
