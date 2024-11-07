document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const tabs = document.getElementById("tabs");
    const tabLinks = document.querySelectorAll(".tabs ul li a");
    const panels = document.querySelectorAll(".tab-panel");

    // Toggle tabs visibility saat hamburger menu diklik
    hamburger.addEventListener("click", function() {
        tabs.classList.toggle("active");
    });

    // Menambahkan event listener untuk tab klik
    tabLinks.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            tabLinks.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            panels.forEach(panel => panel.classList.remove("active"));
            const target = document.querySelector(tab.getAttribute("href"));
            target.classList.add("active");
        });
    });

    // Menampilkan tab pertama secara default
    if (tabLinks.length > 0) {
        tabLinks[0].classList.add("active");
        panels[0].classList.add("active");
    }
});
