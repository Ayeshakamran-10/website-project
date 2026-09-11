function showMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}


function orderFood(foodName) {
    document.getElementById("message").value = foodName;

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var order = document.getElementById("order").value;
    var address = document.getElementById("address").value;

    var phoneNumber = "923002899964";

    var message =
        "Hello DOM Restaurant!" +
        "\n\nName: " + name +
        "\nEmail: " + email +
        "\nOrder: " + order +
        "\nAddress: " + address;

    var whatsappLink =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(order);

    window.location.href = whatsappLink;

});