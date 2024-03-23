import "./Modal.css";

export default function Modal(props) {
  // Here is where we just design modal set up
  return (
    <>
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{props.title}</h2>
          </div>
          <p>{props.children}</p>
          This is a Modal
          <div className="modal-footer">
            <button className="close-btn" onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
