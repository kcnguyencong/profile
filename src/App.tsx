import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import CaseStudy from './pages/CaseStudy'; // Keeping this for backward compatibility or reference
import ProjectDetail from './pages/ProjectDetail'; // Mới

// Admin imports
import AdminLayout from './pages/admin/AdminLayout';
import Login from './pages/admin/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAbout from './pages/admin/AdminAbout';
import AdminProjects from './pages/admin/AdminProjects';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Public Area */}
          <Route path="/" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <About />
              </main>
              <Footer />
            </>
          } />
          <Route path="/projects" element={<><Navbar /><main className="flex-grow"><Projects /></main><Footer /></>} />
          <Route path="/project/:id" element={<><Navbar /><main className="flex-grow"><ProjectDetail /></main><Footer /></>} />
          <Route path="/skills" element={<><Navbar /><main className="flex-grow"><Skills /></main><Footer /></>} />
          
          {/* Keep legacy route just in case */}
          <Route path="/case-study/nexus" element={<><Navbar /><main className="flex-grow"><CaseStudy /></main><Footer /></>} />

          {/* Admin Area */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="projects" element={<AdminProjects />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
