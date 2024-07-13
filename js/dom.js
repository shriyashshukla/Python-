
        // Accessing the DOM elements
        const header = document.getElementById('header');
        const button = document.getElementById('changeTextButton');

        // Adding an event listener to the button
        button.addEventListener('click', () => {
            // Changing the text content of the header element
            header.textContent = 'Text Changed!';
        });
   
