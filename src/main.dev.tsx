import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Renderizar la aplicación en el contenedor de Liferay
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App initialMessage={"Mensaje en inglés"} />
  </StrictMode>
);