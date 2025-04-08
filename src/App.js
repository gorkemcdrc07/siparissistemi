import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import AnaSayfa from "./AnaSayfa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/anasayfa" element={<AnaSayfa />} />
      </Routes>
    </Router>
  );
}
export default App;
