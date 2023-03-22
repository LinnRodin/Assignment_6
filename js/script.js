// strict mode 
'use strict';

try {
    // Find the button with the "data-option" attribute set to "toggle"
    const toggleButton = document.querySelector('[data-option="toggle"]');
    
    // Get the value of the "data-target" attribute on the toggle button, if it exists
    const target = toggleButton?.getAttribute('data-target');

    // Define a function to handle click events on the toggle button
    function handleClick() {
        console.log('test');

        // Find the element with the ID specified in the "data-target" attribute of the toggle button
        const element = document.querySelector(target);

        // Toggle the "hide" class on the element, if it exists
        if (element) {
            element.classList.toggle('hide');
        } else {
            // Log an error message to the console if the element can't be found
            console.error(`Could not find element with target "${target}"`);
        }
    }

    // Add a click event listener to the toggle button, with the handleClick function as the callback
    toggleButton?.addEventListener('click', handleClick);
} catch (err) {
    // Log an error message to the console if an error occurs
    console.error(`An error occurred: ${err}`);
}
