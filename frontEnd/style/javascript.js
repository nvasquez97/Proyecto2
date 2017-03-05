//Tomado de W3Schools.com
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2000);
}
function showPage() {
  document.getElementsByClassName("loading")[0].style.display = "none";
  document.getElementsByClassName("todo")[0].style.display = "block";
}
//!Tomado de W3Schools.com
