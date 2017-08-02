var chars = require('./char.json');

var getCharacter = function(input) {
for (var i = 0; i < chars.length; i++) {
if (chars[i]['name'].toLowerCase().startsWith(input.toLowerCase())) return chars[i];
}};


var getTenNames = function(input) {
var arr =[];
  for (var i = 0; i < chars.length; i++) {
    if (chars[i]['name'].toLowerCase().startsWith(input.toLowerCase())) arr.push(chars[i]['name'])
    if (arr.length == 10) break;
  }
  return arr;
}

var filterBySex = function(input,sex) {
var arr =[];
  for (var i = 0; i < chars.length; i++) {
    if (chars[i]['name'].toLowerCase().startsWith(input.toLowerCase())&&chars[i]['SEX']===sex) arr.push(chars[i]['name'])
    if (arr.length == 10) break;
  }
  return arr;
}

var filterByAlign = function(input,align) {
var arr =[];
  for (var i = 0; i < chars.length; i++) {
    if (chars[i]['name'].toLowerCase().startsWith(input.toLowerCase())&&chars[i]['ALIGN']===align) arr.push(chars[i]['name'])
    if (arr.length == 10) break;
  }
  return arr;
}

var filterBySexAndAlign = function(input,align,sex) {
var arr =[];
if (align === 'both') return filterBySex(input,sex)
else if (sex === 'both') return filterByAlign(input,align);
else {
  for (var i = 0; i < chars.length; i++) {
    if (chars[i]['name'].toLowerCase().startsWith(input.toLowerCase())&&chars[i]['ALIGN']===align&&chars[i]['SEX']===sex)
     arr.push(chars[i]['name'])
    if (arr.length == 10) break;
  }
}
  return arr;
}


module.exports = {
  getCharacter: getCharacter,
  getTenNames: getTenNames,
  filterBySex: filterBySex,
  filterByAlign: filterByAlign,
  filterBySexAndAlign: filterBySexAndAlign,
}
