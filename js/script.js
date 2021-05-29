// show or hide an element
function showHide(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// notice of adding items into shopping cart
function addToCart() {
    alert("The item has been added to the cart!");
}

// notice of log in & create an account
function submitForm() {
    var x = document.forms["loginForm"]["uname"].value;
    if (x == " ") {
        alert("Field must be filled out");
        return false
    } else {
        alert("Welcome!" + " " + document.forms["loginForm"]["uname"].value)
    }
}

// increase and decrease quantity
function append() {
    document.getElementById("quantity_btn").stepUp(1);
}

function substract() {
    document.getElementById("quantity_btn").stepDown(1);
}