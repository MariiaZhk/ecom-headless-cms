import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;