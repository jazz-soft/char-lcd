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

var CW = 5; // charachter width
var CH = 8; // character heights

function CharLCD(obj) {
  var _ = {
    pix: [], txt: [],
    font: [
      [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
      [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
      [],
      [4, 4, 4, 4, 0, 0, 4], // !
      [10, 10, 10], // "
      [10, 10, 31, 10, 31, 10, 10], // #
      [4, 15, 20, 14, 5, 30, 4], // $
      [24, 25, 2, 4, 8, 19, 3], // %
      [12, 18, 20, 8, 21, 18, 13], // &
      [12, 4, 8], // '
      [2, 4, 8, 8, 8, 4, 2], // (
      [8, 4, 2, 2, 2, 4, 8], // )
      [0, 4, 21, 14, 21, 4], [], [], [], [], [],

      [14, 17, 19, 21, 25, 17, 14], // 0
      [4, 12, 4, 4, 4, 4, 14], // 1
      [14, 17, 1, 2, 4, 8, 31], // 2
      [31, 2, 4, 2, 1, 17, 14], // 3
      [2, 6, 10, 18, 31, 2, 2], // 4
      [31, 16, 30, 1, 1, 17, 14], // 5
      [6, 8, 16, 30, 17, 17, 14], // 6
      [31, 1, 2, 4, 8, 8, 8], // 7
      [14, 17, 17, 14, 17, 17, 14], // 8
      [14, 17, 17, 15, 1, 2, 12], // 9

    ]
  };
  _.arg = {
    rows: 2,
    cols: 16,
    pix: 3,
    brk: 1,
    off: '#dd2',
    on: '#143'
  };
  if (obj) {
    if (obj.rows == parseInt(obj.rows) && obj.rows > 0) _.arg.rows = parseInt(obj.rows);
    if (obj.cols == parseInt(obj.cols) && obj.cols > 0) _.arg.cols = parseInt(obj.cols);
  }
  create(_);
  this.set = function(r, c, data) { set(_, r, c, data); };
  this.put = function(r, c, ch) { put(_, r, c, ch); };
}

function create(_) {
  var bottom = document.createElement('div');
  document.body.appendChild(bottom);
  _.arg.at = bottom;
  createAt(_);
}

function createAt(_) {
  var r, c, rr, cc, x, y, xx, yy, pix;
  var cell = _.arg.pix + _.arg.brk;

  var lcd = document.createElement('div');
  lcd.style.position = 'relative';
  lcd.style.display = 'inline-block';
  lcd.style.width = cell * ((1 + CW) * _.arg.cols + 1) + _.arg.brk + 'px';
  lcd.style.height = cell * ((1 + CH) * _.arg.rows + 1) + _.arg.brk + 'px';

  for (r = 0; r < _.arg.rows; r++) {
    for (c = 0; c < _.arg.cols; c++) {
      for (rr = 0; rr < CH; rr++) {
        for (cc = 0; cc < CW; cc++) {
          x = cell * ((1 + CW) * c + 1 + cc) + _.arg.brk;
          y = cell * ((1 + CH) * r + 1 + rr) + _.arg.brk;
          pix = document.createElement('div');
          pix.style.position = 'absolute';
          pix.style.display = 'inline-block';
          pix.style.top = y + 'px';
          pix.style.left = x + 'px';
          pix.style.width = _.arg.pix + 'px';
          pix.style.height = _.arg.pix + 'px';
          pix.style.backgroundColor = _.arg.off;
          _.pix.push(pix);
          lcd.appendChild(pix);
        }
      }
    }
  }
  _.arg.at.appendChild(lcd);
}

function set(_, r, c, data) {
  if (r != parseInt(r) || r < 0 || r >= _.arg.rows || c != parseInt(c) || c < 0 || c >= _.arg.cols) return;
  if (!data) data = [];
  var offset = (r * _.arg.cols + c) * CW * CH - 1;
  for (var i = 0; i < CH; i++) {
    var mask = (data[i] == parseInt(data[i])) ? parseInt(data[i]) : 0;
    for (var j = 0; j < CW; j++) {
      _.pix[offset + CW - j].style.backgroundColor = ((1 << j) & mask) ? _.arg.on : _.arg.off;
    }
    offset += CW;
  }
}

function put(_, r, c, ch) {
  set(_, r, c, _.font[ch.charCodeAt(0)]);
}

////////////////////////////
  return CharLCD;
});
