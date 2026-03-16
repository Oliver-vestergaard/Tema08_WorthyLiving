/*   Fejl Meddelelse      */
const form = document.querySelector(".formNewsletter");
form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":invalid").focus();
}
