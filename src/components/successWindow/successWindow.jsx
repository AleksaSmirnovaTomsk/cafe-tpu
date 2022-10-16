import CloseButton from "react-bootstrap/CloseButton";

import "./SuccessWindow.css";

export default function SuccessWindow({ activeSucc, setActiveSucc }) {
  return (
    <div className={`succ-container ${activeSucc}`}>
      <CloseButton onClick={() => setActiveSucc("")} className="CloseButton" />
      <div className="succ-elem">
        <h3>ОТПРАВКА ПРОШЛА УСПЕШНО!</h3>
      </div>
    </div>
  );
}
