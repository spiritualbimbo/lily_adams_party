import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Subscription from "./pages/Subscription";
import Submitted from "./pages/Submitted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
?         <Route path="lily_adams/subscription" element={<Subscription />} />
?         <Route path="lily_adams/submitted" element={<Submitted />} />

          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
