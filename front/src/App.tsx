import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { EditPage } from "./pages/EditPage";
import { MainPage } from "./pages/MainPage";
import { PostPage } from "./pages/PostPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="place-self-center">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
