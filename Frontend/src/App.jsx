import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "../src/pages/Home";
import Forum from "../src/pages/Forums";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
import NotFound from "../src/pages/NotFound";
import Profile from "../src/pages/Profile";
import Register from "../src/pages/Register";
import Nav from "../src/components/Nav";
import SpecificPost from "./pages/SpecificPost";
import { AuthProvider } from "./context/authContext";
import { useAuth } from "./context/authContext.jsx";
function App() {
  return (
    <AuthProvider>
      <AuthInitializer />
      <BrowserRouter>
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forum/:id" element={<SpecificPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
function AuthInitializer() {
  const { isLogin } = useAuth();

  useEffect(() => {
    isLogin();
  }, []);

  return null; // Renders nothing, but `isLogin` will be called
}
export default App;
