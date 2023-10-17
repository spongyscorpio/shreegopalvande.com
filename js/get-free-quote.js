document.addEventListener("DOMContentLoaded", function () {
    const getFreeQuoteButtons = document.querySelectorAll('.get_free_qoute');
    const landingPage = document.querySelector('.landing-page');
    const getAQuote = document.querySelector('.get-a-qoute');
    const cancelButtons = document.querySelectorAll('.cancel');

    // Function to toggle the active class on the landing page
    function toggleActive() {
        landingPage.classList.toggle('active');
        if (landingPage.classList.contains('active')) {
            moveGetAQuote(0); // Move .get-a-qoute to 0% on Y-axis when active
        } else {
            moveGetAQuote(-150); // Move .get-a-qoute back to -150% on Y-axis when inactive
        }
    }

    // Add click event listeners to "Get a free quote" buttons
    getFreeQuoteButtons.forEach(button => {
        button.addEventListener('click', toggleActive);
    });

    // Function to move the .get-a-qoute element on the Y-axis
    function moveGetAQuote(yPosition) {
        getAQuote.style.transform = `translateY(${yPosition}%)`;
    }

    // Initialize the .get-a-qoute element at -150% on the Y-axis
    moveGetAQuote(-150);

    // Add click event listeners to "Cancel" buttons
    cancelButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Move the .get-a-qoute element back to -150% on the Y-axis
            moveGetAQuote(-150);
            landingPage.classList.remove('active'); // Remove active class
        });
    });


});