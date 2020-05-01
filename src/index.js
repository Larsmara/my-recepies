import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "animate.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// MUI stuff
import { ThemeProvider } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeConfig from "./util/theme";
import CircularProgress from "@material-ui/core/CircularProgress";
// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logout, getUserData } from "./redux/actions/userActions";
import axios from "axios";
import jwtDecode from "jwt-decode";

const theme = createMuiTheme(themeConfig);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    store.dispatch(logout());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
