$(document).ready(function () {
    $(".add-to-cart").click(function () {
        $("#cart-items").append("<li>GHOST POSTER - $699</li>").listview("refresh");
        alert("Item added to cart!");
    });
});