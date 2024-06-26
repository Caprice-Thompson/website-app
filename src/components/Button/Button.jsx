import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./Button.css";

export default function BackButton() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/portfolio");
  };
  return (
    <>
      <div className="back-btn">
        <button id="back" onClick={() => handleBackBtn()}>
          <span>
            <MdArrowBack />
          </span>
        </button>
      </div>
    </>
  );
}
