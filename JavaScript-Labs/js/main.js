// JavaScript tương tác nhẹ cho trang Portfolio
document.addEventListener('DOMContentLoaded', () => {
    console.log("Trang JavaScript-Labs Portfolio đã tải thành công!");
    
    // Tạo hiệu ứng click mượt mà cho các liên kết
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});