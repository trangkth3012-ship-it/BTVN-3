var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border='1' style='border-collapse: collapse; text-align: center; width: 100%;'>");
document.write("<tr>");

// In tiêu đề các thứ trong tuần
for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i].length < 4 ? daysOfWeek[i] : "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th style='padding: 8px; background: #f0f0f0;'>" + day + "</th>");
}
document.write("</tr>");

// In các ngày từ 1 đến 30 (bắt đầu từ Chủ nhật)
var currentDay = 1;
while (currentDay <= 30) {
    document.write("<tr>");
    for (var col = 0; col < 7; col++) {
        if (currentDay <= 30) {
            document.write("<td style='padding: 8px;'>" + currentDay + "</td>");
            currentDay++;
        } else {
            document.write("<td></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");
/* add code here */

