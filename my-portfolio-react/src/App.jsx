import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./app/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./app/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
