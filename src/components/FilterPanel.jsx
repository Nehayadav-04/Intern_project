const PROFILES = ["Web Development", "Data Science", "Design", "Marketing", "Mobile Development", "Content"];
const LOCATIONS = ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune", "Chennai", "Remote"];
const TYPES = ["Work from Home", "In-Office", "Hybrid"];

export default function FilterPanel({ filters, setFilters, onClear }) {
  const hasActiveFilters = filters.profile || filters.location || filters.type;

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2 className="filter-title">Filters</h2>
        {hasActiveFilters && (
          <button className="clear-btn" onClick={onClear}>Clear all</button>
        )}
      </div>

      <div className="filter-group">
        <label className="filter-label">Profile / Role</label>
        <input
          className="filter-input"
          type="text"
          placeholder="e.g. Web Development"
          value={filters.profile}
          onChange={e => setFilters(f => ({ ...f, profile: e.target.value }))}
        />
        <div className="chip-list">
          {PROFILES.map(p => (
            <button
              key={p}
              className={`chip ${filters.profile === p ? "chip-active" : ""}`}
              onClick={() => setFilters(f => ({ ...f, profile: f.profile === p ? "" : p }))}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Location</label>
        <input
          className="filter-input"
          type="text"
          placeholder="e.g. Bangalore"
          value={filters.location}
          onChange={e => setFilters(f => ({ ...f, location: e.target.value }))}
        />
        <div className="chip-list">
          {LOCATIONS.map(l => (
            <button
              key={l}
              className={`chip ${filters.location === l ? "chip-active" : ""}`}
              onClick={() => setFilters(f => ({ ...f, location: f.location === l ? "" : l }))}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Work Type</label>
        <div className="radio-list">
          {TYPES.map(t => (
            <label key={t} className="radio-item">
              <input
                type="radio"
                name="type"
                value={t}
                checked={filters.type === t}
                onChange={() => setFilters(f => ({ ...f, type: f.type === t ? "" : t }))}
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
