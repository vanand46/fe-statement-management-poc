import { mountHeader  } from "./components/header";
import { navigate } from "./routes";

const header = mountHeader();
const headerDiv = document.getElementById("header");

headerDiv.appendChild(header);

navigate("");