import { renderHomePage } from "../pages/home";
import { renderDetailPage } from "../pages/detail";

export const navigate = (route) => {
  // POC

  const rootDiv = document.getElementById("view");
  rootDiv.innerHTML = "";
  if (route === "" || route === "home") {
    renderHomePage();
  }
  if (route === "details") {
    renderDetailPage();
  }
};
