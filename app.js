'use strict';

(function() {
    var form, options;
    form = document.getElementById('radio-button');
    options = form.elements.mouseOp;
    for (var i = [0]; i < options.length; i++) {
      addEvent(options[i], 'click', radioChanged);
    }
  
    function radioChanged() {
      hide = other.checked ? '' : hide;
      otherText.value = '';
    }
  });
  var form = document.getElementById('radio-button');
var offButton = document.getElementById('off');