$(document).ready(function() {
    let count = 0;
    let totalPrice = 0;

    // 1. Khi nhấn nút Mua
    $(".add-btn").click(function() {
        count++; // Tăng số lượng
        $("#cart-count").text(count); // Hiện lên header

        // Lấy tên và giá từ thẻ HTML
        let name = $(this).parent().find("h3").text();
        let price = parseInt($(this).parent().find("span").text());

        // Tính tổng tiền
        totalPrice += price;
        $("#total").text(totalPrice);

        // Thêm tên vào danh sách bill
        $("#bill-list").append("<li>" + name + " - " + price + "đ</li>");
        
        alert("Đã thêm " + name);
    });

    // 2. Khi gửi Form liên hệ
    $("#contact-form").submit(function(e) {
        e.preventDefault(); // Ngăn trang web tải lại
        let name = $("#username").val();
        alert("Cảm ơn " + name + " đã liên hệ!");
    });
});