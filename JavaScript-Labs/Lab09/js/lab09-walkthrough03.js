// Tạo và thêm đoạn văn mới
var first = document.getElementById("first");
var p = document.createElement("p");
p.appendChild(document.createTextNode("this is programmatically created"));
first.appendChild(p);

// Xóa icon có id deleteThisOne
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));