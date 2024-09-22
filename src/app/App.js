import React from "react";
import ReactDOM from "react-dom/client";
import { Dashboard } from "./Dashboard";
import "./index.css";
import { Provider } from "react-redux";
import store from "app/stateManager/redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
