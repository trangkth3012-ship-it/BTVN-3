var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function() { img.className = "makeItGray"; });
img.addEventListener("mouseout", function() { img.className = "makeItNormal"; });

var btn = document.getElementById("testButton");
btn.addEventListener("click", function() {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.style.display = "none";
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
    }
});

