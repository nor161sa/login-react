import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState("");
  const [vozATexto, setVozATexto] = useState("");
  

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value);
  }

  function convertirTextoAvoz(evento) {
    const syntch = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textoAVoz);
    syntch.speak(utterThis);
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-Es";
    recognition.start();
    recognition.onresult = function (event) {
      setVozATexto(event.results[0][0].transcript);
    };
  }
      return(
        <>
        <h1>Conversor TTS y STT</h1>
          <br />
          <h3>Conversor de texto a voz</h3>
          <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto}/>
          <button onClick={convertirTextoAvoz}>Convertir</button>

          <h3>Conversor de voz a texto</h3>
          <button onClick={grabarVozATexto}>Grabar</button>
          {vozATexto}
        </>
      )

  }

    

export default Conversor;
