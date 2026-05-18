import { useState, useEffect, useCallback } from "react";
import FilterPanel from "./components/FilterPanel";
import InternshipList from "./components/InternshipList";
import "./index.css";

const MOCK_INTERNSHIPS = [
  { id: 1, title: "Frontend Developer Intern", company: "TechNova", location: "Bangalore", profile: "Web Development", duration: "3 months", stipend: "₹15,000/month", type: "Work from Home", logo: "TN", color: "#6366f1", posted: "2 days ago", skills: ["React", "CSS", "JavaScript"] },
  { id: 2, title: "Data Science Intern", company: "Analytics Hub", location: "Mumbai", profile: "Data Science", duration: "6 months", stipend: "₹20,000/month", type: "In-Office", logo: "AH", color: "#0ea5e9", posted: "1 day ago", skills: ["Python", "ML", "Pandas"] },
  { id: 3, title: "UI/UX Design Intern", company: "Pixel Studio", location: "Delhi", profile: "Design", duration: "2 months", stipend: "₹10,000/month", type: "Hybrid", logo: "PS", color: "#f59e0b", posted: "3 days ago", skills: ["Figma", "Prototyping", "User Research"] },
  { id: 4, title: "Backend Developer Intern", company: "CloudBase", location: "Hyderabad", profile: "Web Development", duration: "4 months", stipend: "₹18,000/month", type: "Work from Home", logo: "CB", color: "#10b981", posted: "Today", skills: ["Node.js", "MongoDB", "REST API"] },
  { id: 5, title: "Marketing Intern", company: "BrandBoost", location: "Pune", profile: "Marketing", duration: "3 months", stipend: "₹8,000/month", type: "In-Office", logo: "BB", color: "#ec4899", posted: "5 days ago", skills: ["Social Media", "Content Writing", "SEO"] },
  { id: 6, title: "Machine Learning Intern", company: "DeepMind Labs", location: "Bangalore", profile: "Data Science", duration: "6 months", stipend: "₹25,000/month", type: "Hybrid", logo: "DL", color: "#8b5cf6", posted: "Today", skills: ["Python", "TensorFlow", "NLP"] },
  { id: 7, title: "Android Developer Intern", company: "AppForge", location: "Chennai", profile: "Mobile Development", duration: "3 months", stipend: "₹12,000/month", type: "Work from Home", logo: "AF", color: "#14b8a6", posted: "4 days ago", skills: ["Kotlin", "Android SDK", "Firebase"] },
  { id: 8, title: "Content Writing Intern", company: "MediaMint", location: "Remote", profile: "Content", duration: "2 months", stipend: "₹6,000/month", type: "Work from Home", logo: "MM", color: "#f97316", posted: "1 day ago", skills: ["Writing", "Research", "SEO"] },
];

export default function App() {
  const [internships] = useState(MOCK_INTERNSHIPS);
  const [filteredInternships, setFilteredInternships] = useState(MOCK_INTERNSHIPS);
  const [filters, setFilters] = useState({ profile: "", location: "", type: "", search: "" });
  const [loading, setLoading] = useState(false);
  const [savedIds, setSavedIds] = useState([]);

  const applyFilters = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      let result = internships;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        result = result.filter(i =>
          i.title.toLowerCase().includes(q) ||
          i.company.toLowerCase().includes(q) ||
          i.skills.some(s => s.toLowerCase().includes(q))
        );
      }
      if (filters.profile) result = result.filter(i => i.profile.toLowerCase().includes(filters.profile.toLowerCase()));
      if (filters.location) result = result.filter(i => i.location.toLowerCase().includes(filters.location.toLowerCase()));
      if (filters.type) result = result.filter(i => i.type === filters.type);
      setFilteredInternships(result);
      setLoading(false);
    }, 300);
  }, [filters, internships]);

  useEffect(() => { applyFilters(); }, [applyFilters]);

  const toggleSave = (id) => setSavedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const clearFilters = () => setFilters({ profile: "", location: "", type: "", search: "" });

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">InternFinder</span>
          </div>
          <div className="header-search">
            <input
              className="search-bar"
              type="text"
              placeholder="Search internships, companies, skills..."
              value={filters.search}
              onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
            />
          </div>
          <div className="header-stats">
            <span className="stat-chip">{filteredInternships.length} openings</span>
          </div>
        </div>
      </header>

      <main className="main-layout">
        <aside className="sidebar">
          <FilterPanel filters={filters} setFilters={setFilters} onClear={clearFilters} />
        </aside>
        <section className="content">
          <InternshipList
            internships={filteredInternships}
            loading={loading}
            savedIds={savedIds}
            onToggleSave={toggleSave}
            totalCount={internships.length}
          />
        </section>
      </main>
    </div>
  );
}
