import InternshipCard from "./InternshipCard";

export default function InternshipList({ internships, loading, savedIds, onToggleSave, totalCount }) {
  if (loading) {
    return (
      <div className="list-loading">
        {[1, 2, 3].map(i => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-line w-40" />
            <div className="skeleton-line w-24" />
            <div className="skeleton-line w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (internships.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>No internships found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <p className="results-count">
          Showing <strong>{internships.length}</strong> of {totalCount} internships
        </p>
      </div>
      <div className="card-grid">
        {internships.map(intern => (
          <InternshipCard
            key={intern.id}
            internship={intern}
            saved={savedIds.includes(intern.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </div>
  );
}
