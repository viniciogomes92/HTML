/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("meuMenu-mobile");
  if (x.className === "menu-mobile") {
    x.className += " responsive";
  } else {
    x.className = "menu-mobile";
  }
}