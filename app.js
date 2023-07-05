document.getElementById("share-button").addEventListener("click", function () {
  var currentURL = window.location.href;
  alert("Share this recipe:\n" + currentURL);
});
