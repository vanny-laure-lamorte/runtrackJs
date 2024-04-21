$(document).ready(function() {
    var correctOrder = ["assets/logo1.png", "assets/logo2.png", "assets/logo3.png", "assets/logo4.png", "assets/logo5.png", "assets/logo6.png"];

    
 
    $("#container").sortable({
        update: function(event, ui) {
$            if (isCorrectOrder()) {
                showMessage("Vous avez gagné", "green");
            } else {
                if (movesCount > 5) {
                    showMessage("Vous avez perdu", "red");
                }
            }
        }
    });

    // Function to display message with specified text and color
    function showMessage(message, color) {
        $("#message").text(message).removeClass("greenText redText").addClass(color + "Text");
    }

    // Check if the rainbow is correctly composed
    function isCorrectOrder() {
        var currentOrder = $("#container img").map(function() {
            return $(this).attr("src");
        }).get();
        return JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    }

    // Action when the "Mélanger" button is clicked
    $("#mix").click(function() {
        mix_img();
        $("#message").text(""); // Reset message text
        movesCount = 0;
    });
});
