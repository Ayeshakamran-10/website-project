function showMenu() {
    document.getElementById("menu").scrollIntoView({behavior: "smooth"});
}

function orderFood(foodName) {
    document.getElementById("message").value = foodName;
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("show");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var order = document.getElementById("message").value;
    var address = document.getElementById("address").value;
    var phoneNumber = "923002899964";
    var message = "Hello DOM Restaurant!" + "\n\nName: " + name + "\nEmail: " + email + "\nOrder: " + order + "\nAddress: " + address;
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.location.href = whatsappLink;
});