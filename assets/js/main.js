document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach((button) => {
        const icon = button.querySelector(".toggle-icon");

        button.addEventListener("click", function () {
            // Nếu mục này không bị collapse, đặt icon là "−"
            if (!this.classList.contains("collapsed")) {
                icon.textContent = "−";
            } else {
                icon.textContent = "+";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.getElementById("reviewCarousel");
    var hammertime = new Hammer(carousel);
    var carouselInstance = new bootstrap.Carousel(carousel);

    hammertime.on("swipeleft", function () {
        carouselInstance.next();
    });

    hammertime.on("swiperight", function () {
        carouselInstance.prev();
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-container");
    const button = document.getElementById("responsive-button");

    // Hàm để cập nhật nội dung nút theo kích thước màn hình
    function updateButtonContent() {
        if (window.innerWidth < 768) {
            button.textContent = "Start My Application"; // Nội dung cho màn hình nhỏ
        } else {
            button.textContent = "Get Approved Now"; // Nội dung cho màn hình lớn
        }
    }

    // Cập nhật nội dung nút ngay khi tải trang
    updateButtonContent();

    // Cập nhật nội dung nút khi thay đổi kích thước màn hình
    window.addEventListener("resize", updateButtonContent);

    // Xử lý scroll để thêm/loại bỏ class `fixed-button`
    window.addEventListener("scroll", function () {
        const rect = section.getBoundingClientRect();

        // Chỉ áp dụng class `fixed-button` khi màn hình nhỏ
        if (window.innerWidth < 768) {
            if (rect.bottom < 0) {
                button.classList.remove("btn-hover-shake");
                button.classList.add("fixed-button");
            } else {
                button.classList.remove("fixed-button");
                button.classList.add("btn-hover-shake");
            }
        } else {
            button.classList.remove("fixed-button");
            button.classList.add("btn-hover-shake");
        }
    });
});
