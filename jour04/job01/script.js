$(document).ready(function() {
    $("#button").click(function(event) {
        event.preventDefault();
        DisplayQuote();
    });
    
    async function DisplayQuote() {
        const response = await fetch("expression.txt"); 
        if (!response.ok) {
            throw new Error('Erreur de chargement du fichier');
        }
        const quote = await response.text();
        $("#show_quote").text(quote);
    }
});
