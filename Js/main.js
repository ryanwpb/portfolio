var lines = document.getElementsByClassName('lines')[0];
var sideBar = document.getElementsByClassName('side-bar')[0];
var main = document.getElementsByTagName('main')[0];

lines.onclick = function() {
 sideBar.style.left = "0";
 sideBar.classList.add("toggled");
};

main.onclick = function() {
 sideBar.style.left = "-270px";
};
