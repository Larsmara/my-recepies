import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/all.scss";
import "animate.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import { HelmetProvider } from "react-helmet-async";
import firebaseConfig from "./firebaseconfig";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <SuspenseWithPerf fallback={<div className='loader'></div>} traceId={"loading-app-status"}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SuspenseWithPerf>
      </FirebaseAppProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
