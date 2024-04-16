function showhide() {
    var article = document.getElementById('article');

    if (!article) {

        article = document.createElement('article');
        article.id = 'article';
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    } else {
        article.parentNode.removeChild(article);
    }
}