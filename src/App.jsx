import React, { createContext, useState } from "react";
import './app.css'
import Loading from "./components/Loading/loading";
import Bar from "./components/Bar/bar";
import Questions from "./components/Questions/questions";
import audios from './audio.mp3'

export const GlobalState = createContext();

function App() {
  const [load, setLoad] = useState(true);
  const [point, setPoint] = useState(0);
  const [pressButton, setPressButton] = useState(false);
  const [open, setOpen] = useState(false)
  let audio = new Audio(audios)

  const start = () => {
    audio.loop = true
    audio.play()

  }

  setTimeout(() => {
    setLoad(false)
  }, 5000)

  return (
    <GlobalState.Provider value={{point, setPoint}}>
      <div className="container">
        <div className="containerBg">
          <img src="/rb_156536.png" alt="bg" />
        </div>
        {
          load &&
          <Loading />
        }
        {
          !pressButton && !load &&
          <div className="containerButton">
            <div onClick={() => {setPressButton(true); start();}}>
              <span>START</span>
              <img src="/rb_48692.png" alt="Button" />
            </div>
          </div>
        }
        {
          pressButton && point < 3 &&
          <div className="containerGame">
            <Bar />
            {
              point < 3 &&
              <Questions />
            }
          </div>
        }
        {
          point === 3 &&
          <div className="containerAirWrap">
            <span>HAI VINTO!</span>
            <div className="airWrap">
              {!open && <img src="/mail_7286125.png" alt="Mail close" onClick={() => {
                setTimeout(() => {
                    setPoint(4)
                }, 2000)
                setOpen(true);
                }} />}
              {open && <img src="/mail_3744367.png" alt="Mail close" />}
            </div>
            {!open && <span>APRI LA BUSTA!</span>}
          </div>
        }
        {
          point === 4 &&
        <div className="containerLetter">
          <img className="yago" src="/yago-removebg-preview.png" alt="Yago" />
          <div>
            Tanti Auguri di Natale amore mio!
            Siccome quest'anno hai fatto la brava
            ecco qua il premio per un quiz difficilissimo!
            <img className="premio" src="/bamba-ceramiccare-2in1-airglam-b.png" alt="Air Wrap"></img>
          </div>
        </div>
        }
      </div>
    </GlobalState.Provider>
  )
}

export default App
