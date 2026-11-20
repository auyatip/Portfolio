import { renderToString } from "react-dom/server";
import App from "./App";
export { projects } from "./projects";
/** @param {string} path */
export function render(path) {
  return renderToString(<App path={path} />);
}
