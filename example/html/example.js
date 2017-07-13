/* eslint-disable no-unused-vars */

// toast.
var toastCount = 0;
function toastShow() {
  window.Cosmos.toast('toast test ' + toastCount);
  toastCount++;
}
