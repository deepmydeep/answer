Array.prototype.map = function(func) {
  let result = new Array();
  for(var i = 0; i < this.length; i++) {
    result.push(func(this[i]));
  }
  return result;
}
