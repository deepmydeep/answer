class Cube {
  constructor(length) {
    this.length = length;
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set volume(vol) {
    this.length = Math.cbrt(vol);
  }
  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(area) {
    this.length = Math.sqrt(area / 6);
  }
}
