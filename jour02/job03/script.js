document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('button');
    const compteur = document.getElementById('compteur');
    
    let count = 0;
    
    button.addEventListener('click', function() {
        count++;

        compteur.textContent = count;
    });
});
