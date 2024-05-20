document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Récupération des valeurs des champs
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Chargement du fichier JSON
        fetch('./users.json') // Utilise "./" pour indiquer le répertoire actuel
            .then(response => response.json())
            .then(users => {
                // Vérification des informations d'identification
                const foundUser = users.find(user => user.username === username && user.password === password);

                if (foundUser) {
                    // Connexion réussie
                    alert('Connexion réussie !');
                    // Redirection vers une autre page (index.html dans cet exemple)
                    window.location.href = '/index.html'; // Utilise "./" pour indiquer le répertoire actuel
                } else {
                    // Connexion échouée
                    alert('Nom d\'utilisateur ou mot de passe incorrect.');
                }
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
            });
    });
});
