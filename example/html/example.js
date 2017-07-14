/* eslint-disable no-unused-vars */

// toast.
var toastCount = 0;
function toastShow() {
  window.Cosmos.toast('toast test ' + toastCount);
  toastCount++;
}

// message-box.
function showMessage() {
  var text = document.querySelector('#input-msg').value || 'empty';
  var status = document.querySelector('#select-msg').value;
  window.Cosmos.messageBox.add(text, status);
}
