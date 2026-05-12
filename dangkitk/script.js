document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const passwordInput = document.getElementById("password");
    const btnToggle = document.getElementById("btnToggle");
    const strengthMeter = document.getElementById("password-strength");
    const birthdayInput = document.getElementById("birthday");

    // 1. Tính năng Hiện/Ẩn mật khẩu
    btnToggle.addEventListener("click", () => {
        const isPass = passwordInput.type === "password";
        passwordInput.type = isPass ? "text" : "password";
        btnToggle.textContent = isPass ? "Ẩn" : "Hiện";
    });

    // 2. Kiểm tra độ mạnh mật khẩu khi đang gõ (UX)
    passwordInput.addEventListener("input", () => {
        const val = passwordInput.value;
        const hasLetters = /[A-Za-z]/.test(val);
        const hasNumbers = /\d/.test(val);
        const hasSpecial = /[@$!%*#?&]/.test(val);

        if (val.length === 0) {
            strengthMeter.style.width = "0%";
        } else if (val.length < 6 || !(hasLetters && hasNumbers && hasSpecial)) {
            strengthMeter.style.width = "40%";
            strengthMeter.style.backgroundColor = "#fa3e3e"; // Yếu - Đỏ
        } else {
            strengthMeter.style.width = "100%";
            strengthMeter.style.backgroundColor = "#00a400"; // Mạnh - Xanh lá
        }
    });


    // 3. Xử lý khi nhấn nút Đăng ký (Submit)
    form.addEventListener("submit", (e) => {
        const passVal = passwordInput.value;
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

        if (!passRegex.test(passVal)) {
            e.preventDefault(); // Chặn gửi nếu sai định dạng
            alert("Mật khẩu không đạt yêu cầu bảo mật (Cần chữ, số và ký tự đặc biệt)!");
        } else {
            alert("Dữ liệu hợp lệ! Hệ thống đang chuyển hướng tới Email.");
            // Sau alert này, form sẽ tiếp tục thực hiện action mailto:
        }
   
    
    });
    // 4. xử lý ngày sinh phải nằm trong khoảng từ 1997 đến 2026
    birthdayInput.addEventListener("change", function() {
    const selectedDate = new Date(this.value);
    const minDate = new Date("1997-01-01");
    const maxDate = new Date("2026-12-31");

    if (selectedDate < minDate || selectedDate > maxDate) {
        alert("Ngày sinh phải nằm trong khoảng từ 1997 đến 2026!");
        this.value = ""; // Xóa giá trị sai
    }
    });
});
  