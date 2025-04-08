import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Inter font
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
document.head.appendChild(linkElement);

// Add favicon
const faviconElement = document.createElement('link');
faviconElement.rel = 'icon';
faviconElement.type = 'image/svg+xml';
faviconElement.href = 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/outline/rocket-launch.svg';
document.head.appendChild(faviconElement);

// Add title
const titleElement = document.createElement('title');
titleElement.textContent = 'ConnectLift Landing';
document.head.appendChild(titleElement);

createRoot(document.getElementById("root")!).render(<App />);
