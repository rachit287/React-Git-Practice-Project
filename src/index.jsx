import ReactDOM from "react-dom/client"; //this acts as the entry point for the React application

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

//use Vite for fast server start and HMR (Hot Module Replacement).
//npm create vite@latest my-react-app --template react

//you can only learn Git by doing it. The more you do it, the better you get at it.
//ChatGPT has made life much easier for a developer, provided he knows how to use it.