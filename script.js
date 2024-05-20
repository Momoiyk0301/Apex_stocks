const navItems = document.querySelectorAll(".nav-item");
const sectionTitle = document.getElementById("section-title");
const stockTableContainer = document.getElementById("stock-table-container"); // Ajout du conteneur du tableau

navItems.forEach(navItem => {
  navItem.addEventListener("click", () => {
    // Supprime la classe 'active' de tous les éléments
    navItems.forEach(item => {
      item.classList.remove("active");
    });
    // Ajoute la classe 'active' à l'élément cliqué
    navItem.classList.add("active");

    // Change le titre en fonction de l'onglet
    switch(navItem.id) {
      case "nav-home":
        sectionTitle.textContent = "Home";
        clearStockTable(); // 
        break;
      case "nav-team":
        sectionTitle.textContent = "Team";
        clearStockTable(); 
        break;
      case "nav-stocks":
        sectionTitle.textContent = "Stocks";
        generateStockTable(); 
        break;
      case "nav-edl":
        sectionTitle.textContent = "Etat des lieux";
        clearStockTable(); // Supprime le tableau si nécessaire
        break;
      case "nav-settings":
        sectionTitle.textContent = "Settings";
        clearStockTable(); // 
        break;
      default:
        sectionTitle.textContent = "Hello, XX !";
    }

    // Appelle la fonction pour gérer les actions spécifiques à l'onglet
    handleTabChange(navItem.id);
  });
});

function handleTabChange(tabId) {
  // Ajoutez ici les actions spécifiques à chaque onglet
  switch(tabId) {
    case "nav-home":
      // Actions spécifiques à l'onglet Home
      console.log("Home tab active");
      break;
    case "nav-team":
      // Actions spécifiques à l'onglet Team
      console.log("Team tab active");
      break;
    case "nav-stocks":
      // Actions spécifiques à l'onglet Stocks
      console.log("Stocks tab active");
      break;
    case "nav-edl":
      // Actions spécifiques à l'onglet Edl
      console.log("Edl tab active");
      break;
    case "nav-settings":
      // Actions spécifiques à l'onglet Settings
      console.log("Settings tab active");
      break;
    default:
      console.log("Default tab active");
  }
}

function generateStockTable() {
  // Exemples de données de bières
  const stockData = [
    { nom: "Pilsner", quantite: 100, prix: 2.5, unite: "bouteille" },
    { nom: "Lager", quantite: 50, prix: 3.0, unite: "bouteille" },
    { nom: "IPA", quantite: 75, prix: 4.0, unite: "bouteille" },
    { nom: "Stout", quantite: 30, prix: 4.5, unite: "bouteille" },
    { nom: "Ale", quantite: 80, prix: 3.5, unite: "bouteille" }
  ];

  // Créer le tableau
  const table = document.createElement("table");
  table.className = "table";

  // Créer l'en-tête du tableau
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Nom", "Quantité", "Prix", "Unité"];
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Créer le corps du tableau
  const tbody = document.createElement("tbody");
  stockData.forEach(item => {
    const row = document.createElement("tr");

    Object.values(item).forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Vider le conteneur et ajouter le nouveau tableau
  clearStockTable(); // Supprime tout tableau existant
  stockTableContainer.appendChild(table);
}

function clearStockTable() {
  // Supprime le contenu du conteneur
  stockTableContainer.innerHTML = "";
}
