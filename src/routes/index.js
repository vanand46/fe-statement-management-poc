import { renderHomePage } from "../pages/home";
import { renderDetailPage } from "../pages/detail";

export const navigate = async(route) => {
  // POC

  const rootDiv = document.getElementById("view");
  rootDiv.innerHTML = "";
  if (route === "" || route === "home") {
    await renderHomePage();
  }
  if (route === "details") {
    renderDetailPage();
  }
};
