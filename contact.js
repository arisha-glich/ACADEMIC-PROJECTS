function validateForm() {
    // Get form inputs
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    // Check if name is empty
    if (name.trim() == "") {
      alert("Name must be filled out");
      return false;
    }
    
    // Check if email is empty
    if (email.trim() == "") {
      alert("Email must be filled out");
      return false;
    }
    
    // Check if email format is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }
    
    // Check if message is empty
    if (message.trim() == "") {
      alert("Message must be filled out");
      return false;
    }
    
    // Form is valid
    return true;
  }
  