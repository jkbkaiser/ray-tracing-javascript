export class ProgressBar {
  constructor(len, max) {
    this.len = len;
    this.max = max;
    this.state = 0;
  }

  tick() {
    this.state += 1;
  }

  render() {
    let progress = Math.floor((this.state / this.max) * (this.len - 2));
    let filled = "█".repeat(progress);
    let empty = "░".repeat(this.len - 2 - progress);

    let bar = `\r[${filled}${empty}] (${this.state} / ${this.max})`;
    process.stderr.write(bar);
  }
}
