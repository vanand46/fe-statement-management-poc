import { navigate } from "../routes";
export const mountLink = (label, route) => {
  const link = document.createElement("a");
  link.href = "javascript:void(0)";
  link.innerHTML = label;
  link.addEventListener("click", () => navigate(route));
  return link;
};
