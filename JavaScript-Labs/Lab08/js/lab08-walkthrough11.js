// define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// Dữ liệu mẫu mảng quốc gia
var countries = [
    { name: "Bahamas", iso: "BS", capital: "Nassau", population: 301790 },
    { name: "Canada", iso: "CA", capital: "Ottawa", population: 33679000 },
    { name: "Germany", iso: "DE", capital: "Berlin", population: 81802257 },
    { name: "Spain", iso: "ES", capital: "Madrid", population: 46505963 },
    { name: "United Kingdom", iso: "GB", capital: "London", population: 62348447 }
];

for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class='box' style='border:1px solid #bbb; padding:12px; margin-bottom:12px; display:flex; gap:16px; align-items:center;'>");
    document.write("<img src='flags/" + c.iso + ".png' class='boxImg' style='width:60px; height:auto; border:1px solid #ddd;' onerror=\"this.src='https://flagcdn.com/w80/" + c.iso.toLowerCase() + ".png'\">");
    document.write("<div>");
    for (var propertyName in c) {
        document.write("<strong>" + propertyName + ": </strong>" + c[propertyName] + "<br>");
    }
    document.write("</div></div>");
}
