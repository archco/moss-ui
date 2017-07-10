/* eslint-disable no-unused-vars */

// toast.
var toastCount = 0;
function toastShow() {
  window.Cosmos.toast.show('toast test ' + toastCount);
  toastCount++;
}
