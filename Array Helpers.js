Object.assign(Array.prototype, {
  square() { return this.map(x => x * x) },
  cube() { return this.map(x => x * x * x) },
  sum() { return this.reduce((a, b) => a + b, 0) },
  average() { return this.sum() / this.length },
  even() { return this.filter(x => !(x % 2)) },
  odd() { return this.filter(x => (x % 2)) }
})
