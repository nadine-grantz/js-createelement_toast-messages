console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  
event.preventDefault();
const newToastMessage = document.createElement("li"); // wir nehmen das createElement und packen es in eine neue Variable
newToastMessage.classList.add("toast-container__message"); // wir nehmen die Variable und fügen die Class Toast-container_message hinzu
newToastMessage.textContent="ich bin eine neue Toast Message"; // 
toastContainer.append(newToastMessage); // Setzt den Textinhalt der neuen Karte auf den Wert, der gerade in der Texteingabe steht.
console.log(newToastMessage); // funktioniert alles? Testen in der Konsole
});

clearButton.addEventListener("click", () => {
 toastContainer.innerHTML = "";
});
