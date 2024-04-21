$(document).ready(function() {
    var movesCount = 0;

    var correctOrder = ["assets/arc1.png", "assets/arc2.png", "assets/arc3.png", "assets/arc4.png", "assets/arc5.png", "assets/arc6.png"];

    // Mélanger les images
    function mix_img() {
        var container = $("#container");
        var imgs = container.find("img");
        imgs.sort(function() { return 0.5 - Math.random() });
        container.empty();
        imgs.each(function() {
            container.append(this);
        });
    }

    mix_img();

    // Déplacer les images
    $("#container").sortable({
        update: function(event, ui) {
            movesCount++;
            if (isCorrectOrder()) {
                $("#message").text("Vous avez gagné").css("color", "green");
            } else {
                if (movesCount > 5) {
                    $("#message").text("Vous avez perdu").css("color", "red");}
            }
        }
    });
  

    // Vérifier l'arc en ciel est bien recomposé
    function isCorrectOrder() {
        var currentOrder = $("#container img").map(function() {
            return $(this).attr("src");
        }).get();
        return JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    }

    // Action du bouton "Mélanger"
    $("#mix").click(function() {
        mix_img();
        $("#message").text("");
        movesCount = 0;
    });
});




