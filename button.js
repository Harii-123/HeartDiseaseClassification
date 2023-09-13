document.addEventListener('DOMContentLoaded', function () {
    // Store a reference to the button element
    const scrollButton = document.querySelector('#scrollButton');

    // Function to show the button
    function showButton() {
        scrollButton.style.display = 'block';
    }

    // Function to hide the button
    function hideButton() {
        scrollButton.style.display = 'none';
    }

    // Add an event listener to show the button when the page is scrolled
    window.addEventListener('scroll', function () {
        // Check if the user has scrolled to the section
        const targetSection = document.querySelector('#predform');
        const scrollButtonVisible = scrollButton.style.display === 'block';

        if (targetSection && window.scrollY >= targetSection.offsetTop) {
            // If scrolled to or past the target section, hide the button
            if (scrollButtonVisible) {
                hideButton();
            }
        } else {
            // If above the target section, show the button
            if (!scrollButtonVisible) {
                showButton();
            }
        }
    });

    // Add a click event listener to smoothly scroll to the section when the button is clicked
    scrollButton.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector('#predform');
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Add your additional code for the <a> button here
    document.getElementById('submitButton').addEventListener('click', function() {
        // Get all input elements in the form
        const inputElements = document.querySelectorAll('input[type="number"],input[type="decimal"], select');
        let isFormValid = true;

        // Loop through each input element and check if it's empty
        inputElements.forEach(function(inputElement) {
            if (inputElement.value === '') {
                isFormValid = false;
                // Highlight the empty input element or display a warning message
                inputElement.style.border = '2px solid red'; // You can customize this style
                // You can also display a warning message here if needed
            }
        });

        // If any input element is empty, prevent the default link behavior
        // and display a warning message
        if (!isFormValid) {
            event.preventDefault();
            alert('Please fill in all required fields before submitting.');
        }
    });
});
