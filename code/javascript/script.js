document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faqq");

    faqItems.forEach((item) => {
        const toggleButton = item.querySelector(".toggle");
        const answer = item.querySelector(".reponse");

        toggleButton.addEventListener("click", function () {
            item.classList.toggle("activeee");
            if (item.classList.contains("activeee")) {
                toggleButton.textContent = "-";
            } else {
                toggleButton.textContent = "+";
            }
        });
    });
});
