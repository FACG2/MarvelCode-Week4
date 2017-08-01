var test = require('tape');
var functions = require('../src/functions.js');

test('testing search of character', function(t) {
  var actual = functions.getCharacter('Captain America');
  var expected = {
    "page_id": 7139,
    "name": "Captain America (Steven Rogers)",
    "urlslug": "\\/Captain_America_(Steven_Rogers)",
    "ID": "Public Identity",
    "ALIGN": "Good Characters",
    "EYE": "Blue Eyes",
    "HAIR": "White Hair",
    "SEX": "Male Characters",
    "GSM": "",
    "ALIVE": "Living Characters",
    "APPEARANCES": 3360,
    "FIRST APPEARANCE": "Mar-41",
    "Year": 1941
  }
  t.deepEqual(actual, expected);
  t.end();
});

test('get first 10 matches', function(t) {
  var actual = functions.getTenNames('Hulk');
  var expected = ['Hulk (Robert Bruce Banner)', 'Hulk-Killer (Earth-616)',
   'Hulk (Arcade Robot) (Earth-616)', 'Hulk (Taskmaster Robot) (Earth-616)',
    'Hulk (Wrestler) (Earth-616)'];
  t.deepEqual(actual, expected);
  t.end();
});


test('get first 10 matches filtered by sex', function(t) {
  var actual = functions.filterBySex('Jer','Male Characters');
  var expected = ['Jericho Drumm (Earth-616)', 'Jerome Beechman (Earth-616)',
   'Jeryn Hogarth (Earth-616)', 'Jerry Sledge (Earth-616)', 'Jeremy Clarke (Earth-616)',
    'Jerold Morgan (Earth-616)', 'Jeremy Stevens (Earth-616)', 'Jerry Hunt (Earth-616)',
     'Jerome Johnson (Earth-616)', 'Jerome Jaxon (Earth-616)'];
  t.deepEqual(actual, expected);
  t.end();
});



test('get first 10 matches filtered by sex', function(t) {
  var actual = functions.filterBySex('Jer','Male Characters');
  var expected = ['Jericho Drumm (Earth-616)', 'Jerome Beechman (Earth-616)',
   'Jeryn Hogarth (Earth-616)', 'Jerry Sledge (Earth-616)', 'Jeremy Clarke (Earth-616)',
    'Jerold Morgan (Earth-616)', 'Jeremy Stevens (Earth-616)', 'Jerry Hunt (Earth-616)',
     'Jerome Johnson (Earth-616)', 'Jerome Jaxon (Earth-616)'];
  t.deepEqual(actual, expected);
  t.end();
});


test('get first 10 matches filtered by align', function(t) {
  var actual = functions.filterByAlign('jer','Good Characters');
  var expected = ['Jericho Drumm (Earth-616)', 'Jeryn Hogarth (Earth-616)',
   'Jerry Sledge (Earth-616)', 'Jerry Hunt (Earth-616)', 'Jeremiah Muldoon (Earth-616)',
    'Jerry Hunter (Earth-616)', 'Jerry Carstairs (Earth-616)', 'Jerry Fortunov (Earth-616)',
     'Jeremy Mchele (Earth-616)', 'Jerry Dash (Earth-616)'];
  t.deepEqual(actual, expected);
  t.end();
});


test('get first 10 matches filtered by align and sex', function(t) {
  var actual = functions.filterBySexAndAlign('ha','Good Characters','Male Characters');
  var expected = ['Harold Osborn (Earth-616)', 'Harold Hogan (Earth-616)', 'Hannibal King (Earth-616)',
                  'Harrington Byrd (Earth-616)', 'Harry Osgood (Earth-616)',
                   'Hamilton Slade (Rider) (Earth-616)', 'Harris Hobbs (Earth-616)',
                    'Harris Moore (Earth-616)', 'Harry Givens (Earth-616)',
                     'Harrison Snow (Earth-616)'];
  t.deepEqual(actual, expected);
  t.end();
});
