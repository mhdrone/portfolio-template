/** 
 * @author nomad
 * just makes the drop downs work, its pretty simple.
*/

function showDetails(elementToShow) {
  document.getElementById(elementToShow + "-arrow").classList.toggle("arrow-down", true);
  document.getElementById(elementToShow).classList.toggle("visible", true);
}

function hideDetails(elementToShow) {
  document.getElementById(elementToShow + "-arrow").classList.toggle("arrow-down", false);
  document.getElementById(elementToShow).classList.toggle("visible", false);
}

function showButtonClick(elementToShow) {
  var isVisible = document.getElementById(elementToShow).classList.contains("visible");
  if (isVisible) {
    hideDetails(elementToShow);
  }
  else {
    showDetails(elementToShow);
  }
}