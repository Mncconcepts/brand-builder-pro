import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/barlow-condensed";

createRoot(document.getElementById("root")!).render(<App />);
