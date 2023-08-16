"use strict";
export * from "./components/stencil-generated";
export { defineCustomElements } from "stencil-library/loader";

export default reactLibrary;

function reactLibrary() {
  return "Hello from reactLibrary";
}
