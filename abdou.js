document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  // Fonction pour afficher une page spécifique
  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index); // Afficher uniquement la page active
    });
    currentPage = index; // Mettre à jour l'indice de la page actuelle
  }

  // Fonction pour générer les niveaux
  function generateLevels() {
    const levelsContainer = document.getElementById("levelsContainer");
    const numberOfLevels = parseInt(
      document.getElementById("nombreNiveauxChauffes").value
    );

    levelsContainer.innerHTML = ""; // Réinitialiser la zone dynamique

    if (isNaN(numberOfLevels) || numberOfLevels <= 0) {
      return; // Si aucune option valide n'est sélectionnée, ne rien faire
    }

    for (let i = 1; i <= numberOfLevels; i++) {
      const levelDiv = document.createElement("div");
      levelDiv.classList.add("level-group");
      levelDiv.innerHTML = `
                <fieldset>
                    <legend>Niveau ${i}</legend>
                    <div class="form-group">
                        <label for="nombrePiecesNiveau${i}">Nombre de Pièces :</label>
                        <input type="number" id="nombrePiecesNiveau${i}" name="nombrePiecesNiveau${i}" min="1" onchange="generatePieces(${i})" required>
                    </div>
                    <div id="piecesContainerNiveau${i}"></div>
                </fieldset>
            `;
      levelsContainer.appendChild(levelDiv);
    }
  }

  // Fonction pour générer les pièces dans un niveau
  function generatePieces(level) {
    const piecesContainer = document.getElementById(
      `piecesContainerNiveau${level}`
    );
    const numberOfPieces = parseInt(
      document.getElementById(`nombrePiecesNiveau${level}`).value
    );

    piecesContainer.innerHTML = ""; // Réinitialiser la zone des pièces

    if (isNaN(numberOfPieces) || numberOfPieces <= 0) {
      return; // Si aucune option valide n'est sélectionnée, ne rien faire
    }

    for (let j = 1; j <= numberOfPieces; j++) {
      const pieceDiv = document.createElement("div");
      pieceDiv.classList.add("piece-group");
      pieceDiv.innerHTML = `
                <fieldset>
                    <legend>Pièce ${j}</legend>
                    <div class="form-group">
                        <label for="nomPieceNiveau${level}Piece${j}">Nom de la Pièce :</label>
                        <input type="text" id="nomPieceNiveau${level}Piece${j}" name="nomPieceNiveau${level}Piece${j}" required>
                    </div>
                    <div class="form-group">
                        <label for="surfacePieceNiveau${level}Piece${j}">Surface de la Pièce (m²) :</label>
                        <input type="number" id="surfacePieceNiveau${level}Piece${j}" name="surfacePieceNiveau${level}Piece${j}" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="photosPieceNiveau${level}Piece${j}">Photos de la Pièce :</label>
                        <input type="file" id="photosPieceNiveau${level}Piece${j}" name="photosPieceNiveau${level}Piece${j}[]" accept="image/*" multiple>
                        <small>Vous pouvez charger jusqu'à 3 photos.</small>
                    </div>
                </fieldset>
            `;
      piecesContainer.appendChild(pieceDiv);
    }
  }

  // Fonction pour générer les détails des fenêtres
  function generateWindows() {
    console.log("La fonction generateWindows() a été appelée");
    const windowsContainer = document.getElementById("windowsContainer");
    const numberOfWindows = parseInt(
      document.getElementById("nombreFenetreFacade").value
    );

    // Réinitialiser la zone dynamique
    windowsContainer.innerHTML = "";

    if (isNaN(numberOfWindows) || numberOfWindows <= 0) {
      return; // Si aucune option valide n'est sélectionnée, ne rien faire
    }

    for (let i = 1; i <= numberOfWindows; i++) {
      const windowDiv = document.createElement("div");
      windowDiv.classList.add("window-group");
      windowDiv.innerHTML = `
            <fieldset>
                <legend>Fenêtre ${i}</legend>
                <div class="form-group">
                    <label for="typeMateriauxFenetre${i}">Type de matériaux :</label>
                    <select id="typeMateriauxFenetre${i}" name="typeMateriauxFenetre${i}" required>
                        <option value="">Sélectionnez</option>
                        <option value="bois">Bois</option>
                        <option value="alu">Aluminium</option>
                        <option value="pvc">PVC</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="typeVitrageFenetre${i}">Type de vitrage :</label>
                    <select id="typeVitrageFenetre${i}" name="typeVitrageFenetre${i}" required>
                        <option value="">Sélectionnez</option>
                        <option value="simple">Simple vitrage</option>
                        <option value="double">Double vitrage</option>
                        <option value="triple">Triple vitrage</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="typeVoletFenetre${i}">Type de volet :</label>
                    <select id="typeVoletFenetre${i}" name="typeVoletFenetre${i}" required>
                        <option value="">Sélectionnez</option>
                        <option value="roulant">Roulant</option>
                        <option value="battant">Battant</option>
                        <option value="coulissant">Coulissant</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="mesureFenetre${i}">Mesure de la fenêtre :</label>
                    <input type="text" id="mesureFenetre${i}" name="mesureFenetre${i}" placeholder="Exemple : 120x100 cm" required>
                </div>
                <div class="form-group">
                    <label for="nombreMemeMesureFenetre${i}">Nombre de même mesure :</label>
                    <select id="nombreMemeMesureFenetre${i}" name="nombreMemeMesureFenetre${i}" required>
                        <option value="">Sélectionnez</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </fieldset>
        `;
      windowsContainer.appendChild(windowDiv);
    }
  }

  // Ajout de l'écouteur pour s'assurer que la fonction est accessible après le chargement de la page
  document.addEventListener("DOMContentLoaded", function () {
    const nombreFenetreFacade = document.getElementById("nombreFenetreFacade");
    if (nombreFenetreFacade) {
      nombreFenetreFacade.addEventListener("change", generateWindows);
    } else {
      console.error(
        "Le champ 'nombreFenetreFacade' est introuvable dans le DOM."
      );
    }
  });

  // Fonction pour vérifier si tous les champs obligatoires sont remplis
  function validatePage() {
    const currentFields =
      pages[currentPage].querySelectorAll("[data-required]");
    let isValid = true;

    currentFields.forEach((field) => {
      if (field.value.trim() === "") {
        isValid = false;
        field.classList.add("error"); // Ajouter une classe d'erreur pour la mise en surbrillance
      } else {
        field.classList.remove("error"); // Supprimer la classe d'erreur si le champ est rempli
      }
    });

    return isValid;
  }

  // Gérer les boutons Suivant et Précédent
  document.querySelectorAll(".form-actions button").forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.includes("Suivant")) {
        if (validatePage() && currentPage < pages.length - 1) {
          showPage(currentPage + 1); // Afficher la page suivante si les champs sont remplis
        } else {
          alert(
            "Veuillez remplir tous les champs obligatoires avant de passer à la page suivante."
          );
        }
      } else if (this.textContent.includes("Précédent") && currentPage > 0) {
        showPage(currentPage - 1); // Afficher la page précédente
      }
    });
  });

  // Ajouter des écouteurs pour détecter les changements dans les champs
  pages.forEach((page) => {
    const fields = page.querySelectorAll("input, select, textarea");
    fields.forEach((field) => {
      field.addEventListener("input", () => {
        if (field.value.trim() !== "") {
          field.classList.remove("error"); // Supprimer l'erreur lorsque l'utilisateur commence à remplir
        }
      });
    });
  });

  // Rendre les fonctions accessibles globalement
  window.generateLevels = generateLevels;
  window.generatePieces = generatePieces;
  window.showPage = showPage;

  // Afficher la première page au démarrage
  showPage(currentPage);

  // Gestion du bouton Terminer
  const finishButton = document.getElementById("finishButton");
  if (finishButton) {
    finishButton.addEventListener("click", function () {
      alert(
        "Formulaire sauvegardé avec succès ! Vous pouvez maintenant exporter en PDF."
      );
    });
  } else {
    console.error(
      "Le bouton Terminer (finishButton) est introuvable dans le DOM."
    );
  }

  // Gestion du bouton Exporter en PDF
  const exportButton = document.getElementById("exportButton");
  if (exportButton) {
    exportButton.addEventListener("click", async function () {
      console.log("Tentative d'export en PDF...");
      await exportToPDF();
    });
  } else {
    console.error(
      "Le bouton Exporter (exportButton) est introuvable dans le DOM."
    );
  }
});

function togglePhotoUpload(selectElement) {
  const photoUploadSection = document.getElementById("photoUploadSection");
  if (selectElement.value === "oui") {
    photoUploadSection.style.display = "block";
  } else {
    photoUploadSection.style.display = "none";
    document.getElementById("photoPlans").value = "";
  }
}

// Fonction pour exporter les données en PDF
async function exportToPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const marginLeft = 15;
  let yOffset = 20;

  // Vérification de débordement
  function checkPageOverflow(yOffset, marginBottom = 20) {
    if (yOffset > 297 - marginBottom) {
      // Page A4: 297mm hauteur totale
      doc.addPage();
      return 20; // Réinitialiser yOffset pour la nouvelle page
    }
    return yOffset;
  }

  // Fonction pour ajouter une section encadrée
  function addSectionTitle(title) {
    yOffset = checkPageOverflow(yOffset);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setFillColor(52, 152, 219);
    doc.rect(marginLeft, yOffset, 180, 10, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(title, marginLeft + 5, yOffset + 7);
    yOffset += 15;
    doc.setTextColor(0, 0, 0);
  }

  // Fonction pour ajouter un champ avec un fond gris pour la réponse
  function addField(label, value) {
    yOffset = checkPageOverflow(yOffset);

    // Ajouter la question
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, marginLeft, yOffset);

    // Ajouter la réponse alignée à droite avec un fond gris
    const responseX = marginLeft + 80;
    const responseWidth = 90;
    doc.setFillColor(220, 220, 220); // Fond gris clair
    doc.rect(responseX, yOffset - 4, responseWidth, 8, "F"); // Rectangle pour le fond
    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50); // Couleur du texte gris foncé
    doc.text(value || "", responseX + 2, yOffset);
    yOffset += 10;
  }

  // Fonction pour ajouter des photos horizontalement
  async function addPhotos(label, photos) {
    if (photos.length > 0) {
      addField(label, `Nombre de photos: ${photos.length}`);
      const maxPhotosPerRow = 3; // Nombre maximum de photos par ligne
      let photoX = marginLeft; // Position horizontale initiale
      let rowHeight = 50; // Hauteur d'une ligne de photos

      for (let i = 0; i < photos.length && i < 4; i++) {
        const imgData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(photos[i]);
        });

        doc.addImage(imgData, "JPEG", photoX, yOffset, 50, 30);
        photoX += 60;

        if ((i + 1) % maxPhotosPerRow === 0) {
          photoX = marginLeft;
          yOffset += rowHeight;
        }
      }
      yOffset += rowHeight; // Ajouter un espace après la dernière ligne de photos
    } else {
      addField(label, "Aucune photo téléchargée");
    }
  }

  // Fonction pour afficher ou masquer les détails de la mitoyenneté
  function toggleMitoyenneteDetails(selectElement) {
    const mitoyenneteContainer = document.getElementById("mitoyenneteDetails");
    if (selectElement.value === "oui") {
      mitoyenneteContainer.style.display = "block";
      document
        .getElementById("detailsMitoyennete")
        .setAttribute("required", "required");
    } else {
      mitoyenneteContainer.style.display = "none";
      document.getElementById("detailsMitoyennete").removeAttribute("required");
      document.getElementById("detailsMitoyennete").value = "";
    }
  }

  // Mise à jour : Fonction pour gérer les détails du type d'isolant
  function toggleMurIsoleDetails(selectElement) {
    console.log("Mur isolé sélectionné :", selectElement.value);

    const isolantContainer = document.getElementById("isolantContainer");
    if (!isolantContainer) {
      console.error("Le conteneur 'isolantContainer' est introuvable.");
      return;
    }

    if (selectElement.value === "oui") {
      console.log("Affichage des champs d'isolation");
      isolantContainer.style.display = "block";

      // Ajouter les attributs "required" pour les champs conditionnels
      const typeIsolant = document.getElementById("typeIsolant");
      const epaisseurIsolant = document.getElementById("epaisseurIsolant");
      const dateIsolation = document.getElementById("dateIsolation");

      if (typeIsolant && epaisseurIsolant && dateIsolation) {
        typeIsolant.setAttribute("required", "required");
        epaisseurIsolant.setAttribute("required", "required");
        dateIsolation.setAttribute("required", "required");
      } else {
        console.error("Un ou plusieurs champs d'isolation sont introuvables.");
      }
    } else {
      console.log("Masquage des champs d'isolation");
      isolantContainer.style.display = "block"; // Toujours affiché pour simplifier

      // Supprimer les attributs "required" et réinitialiser les valeurs
      const typeIsolant = document.getElementById("typeIsolant");
      const epaisseurIsolant = document.getElementById("epaisseurIsolant");
      const dateIsolation = document.getElementById("dateIsolation");

      if (typeIsolant && epaisseurIsolant && dateIsolation) {
        typeIsolant.removeAttribute("required");
        epaisseurIsolant.removeAttribute("required");
        dateIsolation.removeAttribute("required");
      }
    }
  }

  // Ajout des écouteurs d'événements
  document.addEventListener("DOMContentLoaded", function () {
    const murIsole = document.getElementById("murIsole");
    if (murIsole) {
      murIsole.addEventListener("change", function () {
        toggleMurIsoleDetails(murIsole);
      });
    } else {
      console.error("Le champ 'Mur isolé' est introuvable dans le DOM.");
    }
  });

  const form = document.getElementById("visitForm");
  const formData = new FormData(form);

  // Section 1 : Données générales
  addSectionTitle("Données Générales");
  addField("Nom et Prénom Client", formData.get("nomPrenomClient"));
  addField("Date de prévisite", formData.get("datePrevisite"));
  addField("Adresse", formData.get("adresseClient"));
  addField("N° Téléphone", formData.get("telephoneClient"));
  addField("E-mail", formData.get("emailClient"));
  addField("Date de construction", formData.get("dateConstruction"));
  addField(
    "Lieu de l'inspection Géolocalisé",
    formData.get("geolocalisationLieu")
  );
  addField("Préparé par", formData.get("preparePar"));
  addField("Nom de l’entreprise", formData.get("nomEntreprise"));

  // Section 2 : Informations Client
  addSectionTitle("Informations Client");
  addField("Statut du client", formData.get("statutClient"));
  addField(
    "Nombre de personnes dans le logement",
    formData.get("nombrePersonnesLogement")
  );
  addField("Forme du logement", formData.get("formeLogement"));

  // Ajouter les photos immédiatement après la question concernée
  const plansMaison = formData.get("plansMaison");
  addField("Le client a-t-il des plans de la maison ?", plansMaison);
  if (plansMaison === "oui") {
    const photos = document.getElementById("photoPlans").files;
    await addPhotos("Photos des plans", photos);
  }

  // Section 3 : Informations sur les Niveaux
  addSectionTitle("Informations sur les Niveaux");
  addField("Surface Habitable", formData.get("surfaceHabitable"));
  addField("Nombre de Niveaux Chauffés", formData.get("nombreNiveauxChauffes"));
  addField("Hauteur moyenne sous plafond", formData.get("hauteurPlafond"));
  addField("Y'a une mitoyenneté ?", formData.get("mitoyennete"));
  addField("Pathologies observées", formData.get("pathologies"));
  const numberOfLevels = parseInt(
    document.getElementById("nombreNiveauxChauffes").value
  );

  if (!isNaN(numberOfLevels) && numberOfLevels > 0) {
    for (let i = 1; i <= numberOfLevels; i++) {
      addField(`Niveau ${i}`, "");

      const numberOfPieces = parseInt(
        document.getElementById(`nombrePiecesNiveau${i}`).value
      );
      if (!isNaN(numberOfPieces) && numberOfPieces > 0) {
        for (let j = 1; j <= numberOfPieces; j++) {
          const pieceName = document.getElementById(
            `nomPieceNiveau${i}Piece${j}`
          ).value;
          const pieceSurface = document.getElementById(
            `surfacePieceNiveau${i}Piece${j}`
          ).value;
          addField(`  Pièce ${j} - Nom`, pieceName);
          addField(`  Pièce ${j} - Surface (m²)`, pieceSurface);

          // Gestion des photos des pièces
          const photos = document.getElementById(
            `photosPieceNiveau${i}Piece${j}`
          ).files;
          if (photos.length > 0) {
            await addPhotos(`  Photos de la Pièce ${j}`, photos);
          } else {
            addField(`  Photos de la Pièce ${j}`, "Aucune photo téléchargée");
          }
        }
        for (let j = 1; j <= numberOfPieces; j++) {
          const pieceName = document.getElementById(
            `nomPieceNiveau${i}Piece${j}`
          ).value;
          const pieceSurface = document.getElementById(
            `surfacePieceNiveau${i}Piece${j}`
          ).value;
          addField(`  Pièce ${j} - Nom`, pieceName);
          addField(`  Pièce ${j} - Surface (m²)`, pieceSurface);
        }
      } else {
        addField(`  Niveau ${i}`, "Aucune pièce définie");
      }
    }
  } else {
    addField("Nombre de Niveaux Chauffés", "Aucun niveau spécifié");
  }

  // Section 4 : Informations sur les Facades
  // Section 4 : Informations sur les Facades
  addSectionTitle("Façades");
  addField(
    "Orientation du mur",
    document.getElementById("orientationMur").value
  );
  addField("Type de murs", document.getElementById("typeMur").value);
  await addPhotos(
    "Photos de loin",
    document.getElementById("photosLoin").files
  );
  addField("Mur mitoyen ?", document.getElementById("murMitoyen").value);
  addField(
    "Détails de la mitoyenneté",
    document.getElementById("detailsMitoyennete").value
  );
  addField("Longueur du mur", document.getElementById("longueurMur").value);
  addField(
    "Hauteur sous gouttières",
    document.getElementById("hauteurSousGouttieres").value
  );
  addField("Surface totale", document.getElementById("surfaceTotale").value);
  addField("Mur isolé ?", document.getElementById("murIsole").value);
  addField("Type d'isolant", document.getElementById("typeIsolant").value);
  addField(
    "Épaisseur de l'isolant (mm)",
    document.getElementById("epaisseurIsolant").value
  );
  addField("Année d'isolation", document.getElementById("dateIsolation").value);
  await addPhotos(
    "Photos croquis de façade",
    document.getElementById("photosCroquisFacade").files
  );

  // Section 5 : Informations Plancher Bas
  addSectionTitle("Informations Plancher Bas");
  addField("Type de plancher", formData.get("typePlancher"));
  addField("Position du plancher", formData.get("positionPlancher"));
  addField("Longueur (m)", formData.get("longueurPlancher"));
  addField("Largeur (m)", formData.get("largeurPlancher"));
  addField("Surface (m²)", formData.get("surfacePlancher"));
  addField("Plancher est-il isolé ?", formData.get("plancherIsole"));
  addField("Type d'isolant", formData.get("typeIsolantPlancher"));
  addField(
    "Épaisseur de l'isolant (mm)",
    formData.get("epaisseurIsolantPlancher")
  );
  addField("Année d'isolation", formData.get("anneeIsolationPlancher"));
  addField("Commentaire", formData.get("commentairePlancher"));

  const photosPlancherBas = document.getElementById("photosPlancherBas").files;
  await addPhotos("Photos de Plancher Bas", photosPlancherBas);

  // Section 6 : Informations Les Combles
  addSectionTitle("Informations Les Combles");
  addField("Type de plancher", formData.get("typePlancherCombles"));
  addField("Position des combles", formData.get("positionCombles"));
  addField("Longueur (m)", formData.get("longueurCombles"));
  addField("Largeur (m)", formData.get("largeurCombles"));
  addField("Surface (m²)", formData.get("surfaceCombles"));
  addField("Plancher est-il isolé ?", formData.get("plancherIsoleCombles"));
  addField("Type d'isolant", formData.get("typeIsolantCombles"));
  addField(
    "Épaisseur de l'isolant (mm)",
    formData.get("epaisseurIsolantCombles")
  );
  addField("Année d'isolation", formData.get("anneeIsolationCombles"));
  addField("Commentaire", formData.get("commentaireCombles"));

  // Ajout des photos des combles
  const photosCombles = document.getElementById("photosCombles").files;
  await addPhotos("Photos des combles", photosCombles);

  // Section 7 : Informations Chauffage
  addSectionTitle("Informations Chauffage");
  addField("Type de chauffage", formData.get("typeChauffage"));
  addField("Type d'émetteur", formData.get("typeEmetteur"));
  addField("Type de régulation", formData.get("typeRegulation"));
  addField("Année d'installation", formData.get("anneeChauffage"));
  addField("Commentaire", formData.get("commentaireChauffage"));

  // Ajout des photos de chauffage
  const photosChauffage = document.getElementById("photosChauffage").files;
  await addPhotos("Photos du chauffage", photosChauffage);
  // Section 8 : Informations sur le Système ECS
  addSectionTitle("Informations sur le Système ECS");
  addField("Production système ECS", formData.get("productionECS"));
  addField("ECS lié au chauffage ?", formData.get("ecsLieChauffage"));
  addField("Capacité (litres)", formData.get("capaciteECS"));
  addField("Année d'installation", formData.get("anneeECS"));
  addField("Commentaire", formData.get("commentaireECS"));

  // Ajout des photos du système ECS
  const photosECS = document.getElementById("photosECS").files;
  await addPhotos("Photos du système ECS", photosECS);

  doc.save("fiche_visite_terrain.pdf");
}
