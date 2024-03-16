import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Company from "./components/Dashboard/Company";

function App() {
  return (
    <div>
       <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-1">
          <Header />
          <Routes>
            <Route path="/company" element={<Company />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
