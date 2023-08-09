import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Pages/LoginForm";
import Flag_Page from "./components/Pages/Flag_Page";
import ClickSelfi from "./components/Pages/ClickSelfi";
import Template from "./components/Pages/Template";
import HeroPage from "./components/Pages/HeroPage";
import Selfie_Preview from "./components/Pages/Selfie_Preview";
import CameraOpen from "./components/Pages/CameraOpen";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/flagpage" element={<Flag_Page />} />
          <Route path="/click_selfi" element={<ClickSelfi />} />
          <Route path="/template" element={<Template />} />
          <Route path="/selfie-preview" element={<Selfie_Preview />} />
          <Route path="/heropage" element={<HeroPage />} />
          <Route path="/camera_open" element={<CameraOpen />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
