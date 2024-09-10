// Functionality
// Pobieranie elementów HTML
const modal = document.getElementById("modal");
const modalOpen = document.getElementById("btnOpen");
const modalClose = document.getElementById("btnClose");

// Funkcja otwierająca okno modalne
modalOpen.onclick = function () {
  modal.style.display = "block";
};

// Funkcja zamykająca okno modalne
modalClose.onclick = function () {
  modal.style.display = "none";
};

// // Dodawanie event listenerów
// modalOpen.addEventListener("click", openModal);
// modalClose.addEventListener("click", closeModal);