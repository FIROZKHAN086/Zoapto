function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}


// Foooter
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    alert(`Thank you for subscribing with ${emailInput.value}!`);
    emailInput.value = ''; // Clear the input field
});

function manu() {
    alert("Scrol Please")
}

 