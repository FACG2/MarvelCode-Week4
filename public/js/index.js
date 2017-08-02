(function() {
  var textField = document.getElementById('autocomplete');
  var genders = document.getElementsByName('gender');
  var aligns = document.getElementsByName('align');


  textField.onkeyup = function(event) {
    var input = textField.value;
    var endpoint = '/search';
    var gender = '';
    var align = '';

    genders.forEach(function(radio) {
      if (radio.checked) gender = radio.value;
    })

    aligns.forEach(function(radio) {
      if (radio.checked) align = radio.value;
    })



    var url = endpoint + '?text=' + input + "&gender=" + gender + "&align=" + align;
  var form = document.getElementById('autocomplete-results');
    if (input.length===0){
      while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
    }

    if (input.length > 0) {
      get(url, function(response) {
        while (form.firstChild) {
          form.removeChild(form.firstChild);
        }
        var ar = response.split(',');
        ar.forEach(function(val) {
          var option = document.createElement('li');
          option.className += 'option-li';
          var aLink = document.createElement('a');
          aLink.className += 'option-a';
          var googlelink = document.getElementsByTagName('a').href;
          googlelink = 'http://google.com/search?q=' + encodeURI(val);
          option.value = val;
          option.innerText = val;
          aLink.href = googlelink;
          aLink.target = '_blank'
          form.appendChild(aLink);
          aLink.appendChild(option);;
        });



      })
    }
  };
})();
