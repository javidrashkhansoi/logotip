import { readdirSync } from "fs";
import { resolve } from "path";

function getHTMLFiles(path) {
  const files = readdirSync(path);
  const htmlFiles = files.filter(file => {
    return file.endsWith(".html");
  });
  const input = {};

  htmlFiles.forEach(file => {
    const name = file.replace(".html", "");

    input[name] = resolve(path, file);
  });

  return input;
}

export { getHTMLFiles };
