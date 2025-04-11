async function chargementutilisateur() {
    try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const user = data.results[0];

        document.querySelector(".user-header img").src = user.picture.large;
        document.querySelector(".user-header h2").textContent = `${user.name.first} ${user.name.last}`;
        document.querySelector(".user-body").innerHTML = `
      <p><span class="highlight">Prénom :</span> ${user.name.first}</p>
      <p><span class="highlight">Nom :</span> ${user.name.last}</p>
      <p><span class="highlight">Email :</span> ${user.email}</p>
      <p><span class="highlight">Date d’anniversaire :</span> ${(user.dob.age)}</p>
      <p><span class="highlight">Genre :</span> ${user.gender === 'female' ? 'Féminin' : 'Masculin'}</p>
      <p><span class="highlight">Localisation :</span> ${user.location.city}, ${user.location.country}</p>
      <p><span class="highlight">Téléphone :</span> ${user.phone}</p>
 
    `;
    } catch (error) {
        console.error("Erreur dans le chargement de l'api:", error);
    }
}

chargementutilisateur();