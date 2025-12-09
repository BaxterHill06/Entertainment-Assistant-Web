import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import AddAccount from "./pages/AddAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
