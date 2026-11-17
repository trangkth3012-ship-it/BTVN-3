var boxClass = 'movingDiv'; // Global scope

function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "' style='display:inline-block; border:1px solid #333; padding:15px; margin:5px;'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}// define functions in this file

