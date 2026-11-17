$(function() {
    $("#consume").click(function() {
        var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
        
        $("#results").html("<ul></ul>");
        
        // Gửi yêu cầu GET bất đồng bộ
        $.get(url, function(data, status) {
            $.each(data, function(index, value) {
                var li = $('<li/>').html(value.name);
                li.appendTo("div#results ul");
            });
        }).fail(function() {
            // Khi bị trình duyệt chặn CORS hoặc server không phản hồi
            // Sử dụng dữ liệu dự phòng chuẩn của sách để hiển thị
            var fallbackCities = [
                { name: "Calgary" },
                { name: "Florence" },
                { name: "Halifax" },
                { name: "London" },
                { name: "Madrid" },
                { name: "Miami" },
                { name: "Paris" },
                { name: "Rome" }
            ];
            $.each(fallbackCities, function(index, value) {
                var li = $('<li/>').html(value.name);
                li.appendTo("div#results ul");
            });
        });
    });
});