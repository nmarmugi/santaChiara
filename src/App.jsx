import React, { createContext, useState } from "react";
import './app.css'
import Loading from "./components/Loading/loading";
import Bar from "./components/Bar/bar";
import Questions from "./components/Questions/questions";

export const GlobalState = createContext();

function App() {
  const [load, setLoad] = useState(true);
  const [point, setPoint] = useState(0);
  const [pressButton, setPressButton] = useState(false);

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
            <div onClick={() => setPressButton(true)}>
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
              <img src="/bamba-ceramiccare-2in1-airglam-b.png" alt="Air wrap" />
            </div>
          </div>
        }
      </div>
    </GlobalState.Provider>
  )
}

export default App
