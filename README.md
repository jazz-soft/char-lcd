# char-lcd

[![npm](https://img.shields.io/npm/v/char-lcd.svg)](https://www.npmjs.com/package/char-lcd)

## Character LCD display emulator
Emulate **Hitachi HD44780** and compatible devices in HTML

##### HD44780-A00 (Japanese standard font)  
![polymer-char-lcd](https://jazz-soft.github.io/img/char-lcd-jp.png)

##### HD44780-A02 (European standard font)  
![polymer-char-lcd](https://jazz-soft.github.io/img/char-lcd-eu.png)

## Install

`npm install char-lcd --save`  
or `yarn add char-lcd`  
or clone the whole project from [**GitHub**](https://github.com/jazz-soft/char-lcd)

## Usage

##### Web Component (Polymer)

https://github.com/jazz-soft/polymer-char-lcd

##### Plain HTML

```html
<script src="char-lcd.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/char-lcd"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/char-lcd"></script>
//...
```

##### CommonJS

```js
var CharLCD = require('char-lcd');
//...
```

##### TypeScript / ES6

```js
import { CharLCD } from 'char-lcd';
//...
```

##### AMD

```js
require(['char-lcd'], function(CharLCD) {
  // ...
});
```

## Example
```html
<div id="lcd"></div>

<script>
  var lcd = new CharLCD({ at: 'lcd', rows: 4, cols: 16, rom: 'eu' });

  // Example 1: Display a single custom character at row 0, column 0
  // To set a custom character, use String.fromCharCode to map a character byte (16-255).
  // In this case, use character code 16, which is the first non-blank character in the set.
  lcd.char(0, 0, String.fromCharCode(16));  // Set the custom character at row 0, column 0

  // Example 2: Display another custom character at row 1, column 0
  lcd.char(1, 0, String.fromCharCode(17));  // Set another custom character at row 1, column 0

  // Example 3: Display a string with mapped Unicode characters
  // The lcd.text() function will automatically map Unicode characters to the internal character set.
  lcd.text(2, 1, "Hello LCD!");
  lcd.text(3, 0, "ЁЛКИ-ПАЛКИ!");
</script>
```

## API
##### constructor
`var lcd = new CharLCD(params);`  
`params` is an object with the following keys:  
- `at`: a DOM element in which to place the object, or its `id`;
default: at the bottom of the page;  
- `rom`: `jp` (default) for Japanese standard font, or `eu` for European standard font.  
- `rows`: number of rows;
default: 2;  
- `cols`: number of columns;
default: 16;
- `pix`: pixel size; default: 3;
- `brk`: space between pixel; default: 1;
- `off`: character pixel off color (background); default: #cd2;
- `on`: character pixel on color; default: #143;
- `transitionDuration`: character pixel transition duration; default: 100ms;

Unlike the real hardware where only certain combinations of `rows`/`cols` exist, there are no restrictions in the simulator;


##### char(r, c, h)
`lcd.char(r, c, h);` - set the character at row `r`, column `c` to byte `h`.

##### text(r, c, s)
`lcd.text(r, c, s);` - print string `s` at row `r`, column `c`.  
This function treats `\n` as new line and maps UNICODE characters to the internal character set.

##### font(n, data)
`lcd.font(n, data);` - define the pixels for the `n`-th character; `data` is an array of up to 10 bytes.  
In real hardware, only first 8 characters can be changed, but there is no such limitation in the simulator.

##### clear()
`lcd.clear();` - clear all characters in LCD.