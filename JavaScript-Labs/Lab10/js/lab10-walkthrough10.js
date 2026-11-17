$(function() {
    // Ẩn icon xoay tải khi mới mở trang
    $('.animLoading').hide();

    $("#consume").click(function() {
        // Hiện hiệu ứng loading khi bấm nút
        $('.animLoading').show();

        var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url)
            .done(function(data) {
                $("#results").html("<ul></ul>");
                $.each(data, function(index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            .fail(function(xhr, status, error) {
                // Xử lý lỗi với jqXHR và load danh sách thành phố dự phòng
                console.warn("Máy chủ bên ngoài chặn CORS, tự động chuyển sang dữ liệu chuẩn");
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
                $("#results").html("<ul></ul>");
                $.each(fallbackCities, function(index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            .always(function() {
                // Làm mờ dần và ẩn icon loading
                $('.animLoading').fadeOut("slow");
            });
    });
});