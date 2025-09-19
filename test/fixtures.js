import { spawn } from "node:child_process";
import util from "node:util";

export const execute = (path) => {
  return new Promise((resolve, reject) => {
    let output = "";
    let errorMessage = "";

    const child = spawn("node", [path]);

    child.stdout.on("data", (data) => {
      output += data;
    });

    child.stderr.on("data", (data) => {
      errorMessage += data;
    });

    child.on("close", () => {
      if (errorMessage) {
        reject(new Error(errorMessage));
      } else {
        resolve(util.stripVTControlCharacters(output));
      }
    });
  });
};
