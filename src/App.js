import './sass/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import NoPage from "./pages/NoPage";
import Something from "./pages/Something";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutMe />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/something" element={<Something />}/>
            <Route path="/projects/:projectId" element={<ProjectPage />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:blogId" element={<BlogPage />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
