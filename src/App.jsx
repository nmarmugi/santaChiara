import React, { createContext, useState } from "react";
import './app.css'
import Loading from "./components/Loading/loading";
import Bar from "./components/Bar/bar";
import Questions from "./components/Questions/questions";

export const GlobalState = createContext();

function App() {
  const [load, setLoad] = useState(true);
  const [point, setPoint] = useState(0);

  setTimeout(() => {
    setLoad(false)
  }, 9500)

  return (
    <GlobalState.Provider value={{point, setPoint}}>
      <div className="container">
        {
          load &&
          <Loading />
        }
        {
          !load &&
          <div className="containerGame">
            <Bar />
            {
              point < 3 &&
              <Questions />
            }
          </div>
        }
      </div>
    </GlobalState.Provider>
  )
}

export default App
