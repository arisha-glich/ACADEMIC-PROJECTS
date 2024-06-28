// Loop to alert "Hello World" three times
for (let i = 1; i <= 3; i++) {
    alert("Hello World");
  }
  
    // Function to update the date and time
    function updateDateTime() {
        // Get the current date and time
        var now = new Date();

        // Format the date and time
        var datetimeString = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        });

        // Update the content of the datetime element
        document.getElementById('datetime').textContent = '© ' + datetimeString + ' Catherine\'s Art and Design Blog. All rights reserved. Interested in contributing? ';
    }

    // Call the updateDateTime function initially
    updateDateTime();

    // Update the date and time every second
    setInterval(updateDateTime, 1000);

