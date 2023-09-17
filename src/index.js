import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Local from "./components/Local";
import Footer from "./components/Footer";
import Review from "./components/Review";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
	 <Navbar/>
	<React.StrictMode>
		<App />
	</React.StrictMode>
	<Local/>
	<Review/>
	<Footer/>
	</>
);
