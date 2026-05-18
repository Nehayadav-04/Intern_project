export default function InternshipCard({ internship, saved, onToggleSave }) {
  const { title, company, location, profile, duration, stipend, type, logo, color, posted, skills } = internship;

  const typeColors = {
    "Work from Home": { bg: "#ecfdf5", text: "#065f46" },
    "In-Office": { bg: "#eff6ff", text: "#1d4ed8" },
    "Hybrid": { bg: "#faf5ff", text: "#6b21a8" },
  };
  const tc = typeColors[type] || { bg: "#f3f4f6", text: "#374151" };

  return (
    <div className="card">
      <div className="card-header">
        <div className="company-logo" style={{ background: color + "18", color }}>
          {logo}
        </div>
        <div className="card-title-group">
          <h3 className="card-title">{title}</h3>
          <p className="card-company">{company}</p>
        </div>
        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={() => onToggleSave(internship.id)}
          aria-label={saved ? "Unsave" : "Save"}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-meta">
        <span className="meta-item">📍 {location}</span>
        <span className="meta-item">⏱ {duration}</span>
        <span className="meta-item">💰 {stipend}</span>
      </div>

      <div className="card-tags">
        <span className="type-badge" style={{ background: tc.bg, color: tc.text }}>{type}</span>
        <span className="profile-badge">{profile}</span>
      </div>

      <div className="card-skills">
        {skills.map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>

      <div className="card-footer">
        <span className="posted-time">Posted {posted}</span>
        <a
          href={`https://internshala.com/internship/detail/${internship.id}`}
          target="_blank"
          rel="noreferrer"
          className="apply-btn"
        >
          Apply Now →
        </a>
      </div>
    </div>
  );
}
