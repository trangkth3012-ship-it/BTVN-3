document.getElementById("pageTitle").innerHTML = "Even newer title";
var msg = document.getElementById("msgArea");
var elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    msg.value += "\n" + elem[i].innerText;
}
document.getElementById("features").style.backgroundColor = "green";/* code goes here */