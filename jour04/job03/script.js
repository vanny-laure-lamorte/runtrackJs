function filtrerDonnees() {
    const form = document.getElementById('filterForm');
    const formData = new FormData(form);

    const id = formData.get('id');
    const name = formData.get('name');
    const type = formData.get('type');

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => {
                return (
                    (!id || item.id.toString()=== id) &&
                    (!name || item.name.english.toLowerCase().includes(name.toLowerCase())) &&
                    (!type || item.type.includes(type))
                );
            });

            afficherResultats(filteredData);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}

function afficherResultats(data) {
    const resultatsDiv = document.getElementById('resultats');
    resultatsDiv.innerHTML = '';

    if (data.length === 0) {
        resultatsDiv.textContent = 'Aucun résultat trouvé.';
        return;
    }

    const ul = document.createElement('ul');
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `ID: ${item.id}, Name: ${item.name.english}, Type: ${item.type.join(', ')}`;
        ul.appendChild(li);
    });

    resultatsDiv.appendChild(ul);
}
