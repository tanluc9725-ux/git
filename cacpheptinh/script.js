document.addEventListener('DOMContentLoaded', function() {
    
    // Khai báo các thành phần
    const inputNum1 = document.getElementById('num1');
    const inputNum2 = document.getElementById('num2');
    const resultDisplay = document.getElementById('result-value');
    const buttons = document.querySelectorAll('.operator-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Lấy giá trị hiện tại
            const val1 = inputNum1.value.trim();
            const val2 = inputNum2.value.trim();
            const phepTinh = this.innerText;

            // 1. Kiểm tra trống
            if (val1 === "" || val2 === "") {
                alert("Vui lòng nhập đầy đủ hai số hạng!");
                return;
            }

            const n1 = parseFloat(val1);
            const n2 = parseFloat(val2);

            // 2. Kiểm tra điều kiện Số hạng 2 phải khác 0
            if (n2 === 0) {
                alert("Lỗi: Số hạng thứ 2 phải khác 0. Vui lòng nhập lại!");
                inputNum2.value = ""; // Xóa số 0
                inputNum2.focus();    // Đưa con trỏ vào ô số hạng 2
                resultDisplay.innerText = "?";
                return;
            }

            // 3. Thực hiện tính toán
            let ketQua = 0;
            switch (phepTinh) {
                case '+': ketQua = n1 + n2; break;
                case '-': ketQua = n1 - n2; break;
                case '*': ketQua = n1 * n2; break;
                case '/': ketQua = n1 / n2; break;
            }

            // 4. Hiển thị (Làm tròn 2 chữ số nếu là số thập phân)
            resultDisplay.innerText = Number.isInteger(ketQua) ? ketQua : ketQua.toFixed(2);
        });
    });
});