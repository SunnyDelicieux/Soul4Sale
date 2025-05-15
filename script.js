
const files = {
  file_pacte_feerique: "Contenu du pacte féerique...",
  file_manuel_sacrifice: "Instructions du sacrifice...",
  file_theorie_effondrement: "Voici la théorie mystique de l'effondrement...",
  file_rituel: "> rituel_oubli\nSouvenir requis : [________]\nChargement...\nModification validée sous peu.",
  rapport_de_maintenance: "Rapport technique fragmenté...",
  nom_d_un_enfant: "Un nom oublié. Peut-être important.",
  odeur_des_roses: "Un souvenir olfactif persistant, presque tangible."
};

function showFile(file) {
  const terminal = document.getElementById("terminal");
  if (files[file]) {
    terminal.textContent += `\n> load ${file}\n` + files[file] + "\n>";
  } else {
    terminal.textContent += `\n> load ${file}\nFichier introuvable.\n>`;
  }
}
