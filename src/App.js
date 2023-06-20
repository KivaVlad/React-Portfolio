import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const About = lazy(() => import("./pages/AboutPage/About"));
const Projects = lazy(() => import("./pages/ProjectsPage/Projects"));
const Contacts = lazy(() => import("./pages/ContactsPage/Contacts"));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
