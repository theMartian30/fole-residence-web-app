const loginForm = document.getElementById("login-form");
const loginButton = document.querySelector('button[type="submit"]');
// Add an event listener to the login form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are "admin"
    if (username === "admin" && password === "admin") {
        // Redirect to the home page
        window.location.href = "home.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
