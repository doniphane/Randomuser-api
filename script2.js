const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const userContainer = document.getElementById("userContainer");

function chargerUtilisateurs(nb) {
    fetch(`https://randomuser.me/api/?results=${nb}`)
        .then((res) => res.json())
        .then((data) => {
            afficherUtilisateurs(data.results);
        })
        .catch((err) => console.error("Erreur API :", err));
}

function afficherUtilisateurs(utilisateurs) {
    userContainer.innerHTML = "";

    utilisateurs.forEach((user) => {
        const cardFlip = document.createElement("div");
        cardFlip.className = "user-card-flip";

        const cardInner = document.createElement("div");
        cardInner.className = "user-card-inner";


        const cardFront = document.createElement("div");
        cardFront.className = "user-card-front";
        cardFront.innerHTML = `
            <div class="user-header">
                <img src="${user.picture.large}" alt="Avatar Utilisateur" />
                <div>
                    <h2>${user.name.first} ${user.name.last}</h2>
                </div>
            </div>
        `;


        const cardBack = document.createElement("div");
        cardBack.className = "user-card-back";
        cardBack.innerHTML = `
            <div class="user-body">
                <p><span class="highlight">Prénom :</span> ${user.name.first}</p>
                <p><span class="highlight">Nom :</span> ${user.name.last}</p>
                <p><span class="highlight">Email :</span> ${user.email}</p>
                <p><span class="highlight">Date d’anniversaire :</span> ${new Date(user.dob.date).toLocaleDateString()}</p>
                <p><span class="highlight">Genre :</span> ${user.gender === 'female' ? 'Féminin' : 'Masculin'}</p>
                <p><span class="highlight">Localisation :</span> ${user.location.city}, ${user.location.country}</p>
                <p><span class="highlight">Téléphone :</span> ${user.phone}</p>
            </div>
        `;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardFlip.appendChild(cardInner);
        userContainer.appendChild(cardFlip);
    });
}

rangeInput.addEventListener("input", () => {
    const nb = parseInt(rangeInput.value);
    rangeValue.textContent = nb;
    chargerUtilisateurs(nb);
});

chargerUtilisateurs(parseInt(rangeInput.value));
