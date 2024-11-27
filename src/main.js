import { ProgressBar } from "./progress.mjs";

const width = 400;
const height = 600;

let progressBar = new ProgressBar(40, height);

console.log("P3");
console.log(`${width} ${height}`);
console.log("255");

for (let j = 0; j < height; j++) {
  for (let i = 0; i < width; i++) {
    let r = i / (width - 1);
    let g = j / (height - 1);
    let b = 0;

    let ir = Math.floor(255.999 * r);
    let ig = Math.floor(255.999 * g);
    let ib = Math.floor(255.999 * b);

    console.log(`${ir} ${ig} ${ib}`);
  }

  progressBar.tick();
  progressBar.render();
}

process.stderr.write("\nfinished");
