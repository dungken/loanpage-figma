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
        // if (window.innerWidth < 1500) {
        button.textContent = "Start My Application"; // Nội dung cho màn hình nhỏ
        // } else {
        //     button.textContent = "Get Approved Now"; // Nội dung cho màn hình lớn
        // }
    }

    // Cập nhật nội dung nút ngay khi tải trang
    updateButtonContent();

    // Cập nhật nội dung nút khi thay đổi kích thước màn hình
    window.addEventListener("resize", updateButtonContent);

    // Xử lý scroll để thêm/loại bỏ class `fixed-button`
    window.addEventListener("scroll", function () {
        const rect = section.getBoundingClientRect();

        // Chỉ áp dụng class `fixed-button` khi màn hình nhỏ
        if (window.innerWidth < 1500) {
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
// List of messages to show
const messages = [
    {
        name: "Emily",
        location: "Texas",
        amount: "$10,000",
        grant: "Unemployed Grant",
    },
    {
        name: "John",
        location: "Ohio",
        amount: "$40,000",
        grant: "Business Grant",
    },
    {
        name: "Sarah",
        location: "California",
        amount: "$5,000",
        grant: "Education Grant",
    },
    {
        name: "David",
        location: "Florida",
        amount: "$82,000",
        grant: "Housing Grant",
    },
    {
        name: "Jessica",
        location: "New York",
        amount: "$8,000",
        grant: "Unemployed Grant program",
    },
    {
        name: "Maria",
        location: "Illinois",
        amount: "$115,000",
        grant: "Business Grant program!",
    },
    {
        name: "Christopher",
        location: "Pennsylvania",
        amount: "$6,000",
        grant: "Education Grant program",
    },
    {
        name: "Ashley",
        location: "Arizona",
        amount: "$75,000",
        grant: "Housing Grant program",
    },
];

let currentIndex = 0;

function showPopup() {
    // Get the popup element
    const popup = document.getElementById("fomo");

    // Update content dynamically
    const currentMessage = messages[currentIndex];
    popup.querySelector(".user_name").textContent = currentMessage.name;
    popup.querySelector(".location").textContent = currentMessage.location;
    popup.querySelector(".loanAmount").textContent = currentMessage.amount;
    popup.querySelector(
        ".Boked"
    ).innerHTML = `was approved for a <span class="loanAmount">${currentMessage.amount}</span> from the ${currentMessage.grant}`;

    // Show the popup
    popup.style.display = "flex";

    // Hide the popup after 5 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 5000);

    // Move to the next message
    currentIndex = (currentIndex + 1) % messages.length;
}

// Start the popup cycle
function startPopupCycle() {
    showPopup(); // Show the first popup immediately
    setInterval(showPopup, 15000); // Show popup every 15 seconds
}

// Start when the DOM content is loaded
document.addEventListener("DOMContentLoaded", startPopupCycle);

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Counter animation function
function runCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const speed = 200;
    const increment = Math.ceil(target / speed);

    const updateCount = () => {
        const current = +counter.innerText.replace(/,/g, ""); // Remove commas
        if (current < target) {
            counter.innerText = new Intl.NumberFormat().format(
                current + increment
            );
            setTimeout(updateCount, 10); // Adjust delay between updates
        } else {
            counter.innerText = new Intl.NumberFormat().format(target);
        }
    };

    updateCount();
}

// Reset the counter
function resetCounter(counter) {
    counter.innerText = "0";
    counter.classList.remove("counted"); // Allow the counter to reanimate
}

// Scroll event listener to trigger counters
window.addEventListener("scroll", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        if (isInViewport(counter)) {
            // If in viewport, run the counter
            if (!counter.classList.contains("counted")) {
                counter.classList.add("counted");
                runCounter(counter);
            }
        } else {
            // If out of viewport, reset the counter
            resetCounter(counter);
        }
    });
});
