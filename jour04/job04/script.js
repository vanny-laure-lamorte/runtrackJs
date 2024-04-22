
document.addEventListener('DOMContentLoaded', function() {

    // Connexion
    $("#update").click(function(event) {
        event.preventDefault();
        updateTable()
})});

function updateTable() {
    fetch('utilisateur.json') 
        .then(response => response.json()) 
        .then(data => {
            const tableBody = document.getElementById('UserInfo');
            tableBody.innerHTML = ''; 
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tableBody.appendChild(row);
            });
        })
}

