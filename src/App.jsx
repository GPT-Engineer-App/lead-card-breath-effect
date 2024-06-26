import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SalesmanDashboard from "./pages/SalesmanDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SalesmanDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
