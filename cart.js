$(function () {
    // Event handler for Add to Cart button
    $(".btn-primary").click(function (event) {
        event.preventDefault();

        // Get the card element containing the clicked button
        const $card = $(this).closest(".card");

        // Extract product details
        const productTitle = $card.find(".card-title").text();
        const productPrice = $card.find("p").text();
        const productImage = $card.find("img").attr("src");

        // Save product details in local storage for redirection
        localStorage.setItem("productTitle", productTitle);
        localStorage.setItem("productPrice", productPrice);
        localStorage.setItem("productImage", productImage);

        // Redirect to the product details page
        window.location.href = "carts.html";
    });
   $("#icon").click(function(){
    window.location.href ="carts.html";
   });
});

