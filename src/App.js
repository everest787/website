import './sass/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Projects from "./pages/Projects";
import MyWebsite from "./pages/projects/Website";
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
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:blogId" element={<BlogPage />}/>

            <Route path="/projects/myWebsite" element={<MyWebsite />}/>

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
