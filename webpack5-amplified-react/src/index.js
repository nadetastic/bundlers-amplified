import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

console.log("Ampify", Amplify.configure());

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);