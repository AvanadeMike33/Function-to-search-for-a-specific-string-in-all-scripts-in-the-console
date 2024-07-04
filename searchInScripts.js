// Function to search for a specific string in all scripts
function searchInScripts(searchString) {
    // Get all scripts on the page
    const scripts = document.querySelectorAll('script');
    let found = false;

    // Iterate through each script
    scripts.forEach(script => {
        if (script.src) {
            // If the script has a src attribute (it is external)
            fetch(script.src)
                .then(response => response.text())
                .then(text => {
                    if (text.includes(searchString)) {
                        console.log(`Found in ${script.src}`);
                        found = true;
                    }
                });
        } else if (script.textContent.includes(searchString)) {
            // If the script is inline
            console.log('Found in an inline script');
            found = true;
        }
    });

    if (!found) {
        console.log('String not found in any script');
    }
}

// Use the function to search for a specific string
searchInScripts('your_string_to_search');

