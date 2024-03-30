import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Portfolio from "./pf-main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
