import "./ProjectSelection.css";

export default function ProjectSelection(props) {
  return (
    <div className="portfolio-container">
      <img src={props.image} alt={props.alt} />
      <div className="btn">
        <button
          id="project-selection-btn"
          onClick={() => props.handleProjectSelection(props.nav)}
        >
          {props.children}
        </button>
      </div>
    </div>
  );
}
