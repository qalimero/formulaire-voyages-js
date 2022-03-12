console.log("connecté");
//Je selectionne & je stock
// Le formulaire
const form = document.getElementById("form");
// Les champs input text & input date
const pays = document.getElementById("pays");
const start = document.getElementById("start");
const end = document.getElementById("end");
const listeResultats = document.querySelector(".liste-resultats");
const voyages = [
  {
    pays: "borabora",
    prix: 1490,
    voyageurs: 2
  },
  {
    pays: "bahamas",
    prix: 1790,
    voyageurs: 4
  },
  {
    pays: "bahamas",
    prix: 1490,
    voyageurs: 2
  },
  {
    pays: "tahiti",
    prix: 1790,
    voyageurs: 4
  },
]; //Fermeture du tableau
//Je vérifié le contenu du tableau
// console.log(voyages, "tableaux voyages");

form.addEventListener("submit", function (e) {
  //Empêcher le rafraichissement de la page
  e.preventDefault();
  console.log("formulaire validé");
  //Je stock les variables dans l'objet choix
  const choix = {
    pays: pays.value,
    start: start.value,
    end: end.value,
  };
  console.log(choix, "choix");
  //Je transforme l'objet
  const choixString = JSON.stringify(choix);
  console.log(choixString);
  //Je place l'objet dans le localStorage
  localStorage.setItem("details", choixString);
  //On rafraichit la page pour faire apparaître les informations
  window.location.href = window.location.href;
});

function displayDetails() {
  //Ici récupération du storage
  const choixObjet = JSON.parse(localStorage.getItem("details"));
  // Pré-remplir les champs - Insertion des valeurs stockées dans les champs de formulaire
  pays.value = choixObjet.pays;
  start.value = choixObjet.start;
  end.value = choixObjet.end;
  //Filter en fonction du choix du pays enregistré
  const resultats = voyages.filter((voyage) => voyage.pays === pays.value);
  console.log(resultats, "resultats");
  resultats.forEach((resultat) => {
    console.log(resultat, "resulat");
    //Je crée une div avec les valeurs à l'interieur
    const item = `
                    <div class="item">
                        <p class="item-pays">
                            ${resultat.pays}
                        </p>
                        <p>
                            Offres pour ${resultat.voyageurs} personnes
                        </p>
                        <p>
                            Prix vol inclus ${resultat.prix}€
                        </p>
                        <button> Go! </button>
                    </div>
      
                `
                //Je place cette DIV dans la page
                listeResultats.innerHTML += item;
  });
  //Fermeture de la fonction
}
displayDetails();
