import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
