import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* 
          Drop your Route heer
          <Route path="/" element={<Dashboard />} />
           */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;