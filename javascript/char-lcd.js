(function(global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd) {
    define('CharLCD', [], factory);
  }
  else {
    global.CharLCD = factory();
  }
})(this, function() {
////////////////////////////

//dce41d
//184435

function CharLCD(w, h, d) {
console.log('CharLCD()');
}

////////////////////////////
  return CharLCD;
});
