document.addEventListener('DOMContentLoaded', (event) => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const userName = params.get('user'); // "user" is the name of the parameter

    // If the user parameter exists, update the HTML
    if(userName) {
        document.getElementById('username').textContent = userName;
    }
});

