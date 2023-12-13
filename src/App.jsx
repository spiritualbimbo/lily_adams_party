import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Subscription from "./pages/Subscription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
?          <Route path="lily_adams/subscription" element={<Subscription />} />

          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
