import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { useState } from "react";
import respostaGemini from "../../config/gemini.js";

// SHOW SIDEBAR
function MainContent() {
  function handleSidebar() {
    const sidebar = document.querySelector(".hide-sidebar");
    sidebar.classList.toggle("active");
  }

  const [inputValue, setInputValue] = useState("");
  const [resposta, setResposta] = useState("");
  const [api, setApi] = useState('')

  async function handleSubmit() {
    try {
      if(api === "") return alert("Coloque uma chave de API valida!")
        
      if (inputValue !== "" || api !== "") {
        const response = await respostaGemini(inputValue, api);
        setResposta(response);
      }

    } catch (error) {
      console.log("ERRO FRONT: ", error);
    }
  }

  return (
    <>
      <main className="container-main">
        <div className="sidebar">
          <div className="sidebar-btn">
            <button onClick={handleSidebar}>
              <FontAwesomeIcon
                icon={faArrowsLeftRight}
                className="sidebar-icon"
              />
            </button>
          </div>
          <div className="hide-sidebar">
            <Sidebar />
          </div>
        </div>

        <div className="container-api">
          <p className="api-title">Coloque a sua Gemini API KEY </p>
          <input type="text" onChange={(e) => setApi(e.target.value)}/>
          <p>Não sabe como? <a href="https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br" className="api-link">Clique aqui</a></p> 
        </div>   

        <div className="inner-main">
          <div className="main-title">
            <h2>Me pergunte qualquer coisa :)</h2>
          </div>

          <div className="actions">
            <div className="div-message">
              <input
                type="text"
                className="message"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="div-btn-submit">
              <button onClick={handleSubmit}>
                <FontAwesomeIcon icon={faChevronRight} className="submit-btn" />
              </button>
            </div>
          </div>
          <div className="response-container">
            <p>{resposta}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainContent;
