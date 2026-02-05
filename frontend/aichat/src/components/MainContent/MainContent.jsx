import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar.jsx";

function MainContent() {
  function handleSidebar() {
    const sidebar = document.querySelector(".hide-sidebar");
    sidebar.classList.toggle("active");
  }

  function handleSubmit() {
    console.log("enviar mensagem");
  }

  return (
    <>
      <main className="container-main">
        <div className="sidebar">
          <div className="sidebar-btn">
            <button onClick={handleSidebar}>
              <FontAwesomeIcon icon={faArrowsLeftRight} className="sidebar-icon" />
            </button>
          </div>
          <div className="hide-sidebar">
            <Sidebar />
          </div>
        </div>

        <div className="inner-main">
          <div className="main-title">
            <h2>Me pergunte qualquer coisa :)</h2>
          </div>

          <div className="actions">
            <div className="div-message">
              <input type="text" className="message" />
            </div>
            <div className="div-btn-submit">
              <button onClick={handleSubmit}>
                <FontAwesomeIcon icon={faChevronRight} className="submit-btn" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainContent;
