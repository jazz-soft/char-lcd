# char-lcd

[![npm](https://img.shields.io/npm/v/char-lcd.svg)](https://www.npmjs.com/package/char-lcd)

## Character LCD display emulator
Emulate **Hitachi HD44780U** and compatible devices in HTML

##### HD44780U-A00 (Japanese standard font)  
![polymer-char-lcd](https://jazz-soft.github.io/img/char-lcd-jp.png)

##### HD44780U-A02 (European standard font)  
![polymer-char-lcd](https://jazz-soft.github.io/img/char-lcd-eu.png)

## Install

`npm install char-lcd --save`  
or `bower install char-lcd`  
or `yarn add char-lcd`  
or clone the whole project from [**GitHub**](https://github.com/jazz-soft/char-lcd)

## Usage

##### Web Component (Polymer)

https://github.com/jazz-soft/polymer-char-lcd

##### Plain HTML

    <script src="char-lcd.js"></script>
    //...

##### CDN (always the latest version!)

    <script src="https://cdn.jsdelivr.net/npm/char-lcd"></script>
    //...

##### CommonJS

    var CharLCD = require('char-lcd');
    //...

##### AMD

    require(['char-lcd'], function(CharLCD) {
      // ...
    });

## Example
    <div id=lcd></lcd>
    ...
    var lcd = new CharLCD({ at: 'lcd', rows: 2, cols: 16, rom: 'eu' });
    // Map UNICODE string to the internal character set:
    lcd.text(0, 0, "ЁЛКИ-ПАЛКИ!");
