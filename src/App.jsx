import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Section "Projects" (anciennement "Work") */}
      <Route path="/projects" element={<ProjectsPage section="projects" />} />
      {/* Quand on entre dans un projet précis */}
      <Route path="/projects/:slug" element={<ProjectsPage section="projects" />} />

      {/* Redirection des anciens liens /work vers /projects (ne casse aucun favori) */}
      <Route path="/work" element={<Navigate to="/projects" replace />} />
      <Route path="/work/:slug" element={<Navigate to="/projects" replace />} />

      <Route path="/about" element={<About />} />

      <Route path="/book" element={<ProjectsPage section="book" />} />
      {/* Nouvelle route pour quand on entre dans un projet de "book" */}
      <Route path="/book/:slug" element={<ProjectsPage section="book" />} />

      {/* ── Section PRINT désactivée temporairement ──
          Pour la réactiver : décommente les deux routes ci-dessous,
          ainsi que le <NavLink to="/print"> dans Layout.jsx. */}
      {/*
      <Route path="/print" element={<ProjectsPage section="print" />} />
      <Route path="/print/:slug" element={<ProjectsPage section="print" />} />
      */}

      {/* toute URL inconnue → accueil */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
