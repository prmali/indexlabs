import React from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Home from "./screens/Home";

library.add(fab);
function App() {
	return <Home />;
}

export default App;
