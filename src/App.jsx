import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import NotFound from "./NotFound";
import About from "./About";
import Friends from "./Friends";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/images" element={<ImageGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
