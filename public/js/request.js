var request= function (method,url,callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        callback(response);
      }
  };
  xhr.open(method, url, true);
  xhr.send();
};


  var get = function (url, cb) {
    request('GET',url,cb);
  }
