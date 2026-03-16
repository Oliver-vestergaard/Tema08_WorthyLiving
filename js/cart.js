const form = document.querySelector("#checkoutForm");

const mailOutput = document.querySelector("#mail_output");
const fornavnOutput = document.querySelector("#fornavn_output");
const efternavnOutput = document.querySelector("#efternavn_output");
const adresseOutput = document.querySelector("#adresse_output");
const postnummerOutput = document.querySelector("#postnummer_output");
const byOutput = document.querySelector("#by_output");
const betalingOutput = document.querySelector("#betaling_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const mail = formData.get("mail");
  const fornavn = formData.get("fornavn");
  const efternavn = formData.get("efternavn");
  const adresse = formData.get("adresse");
  const postnummer = formData.get("postnummer");
  const by = formData.get("by");
  const betaling = formData.get("betaling");

  mailOutput.textContent = mail;
  fornavnOutput.textContent = fornavn;
  efternavnOutput.textContent = efternavn;
  adresseOutput.textContent = adresse;
  postnummerOutput.textContent = postnummer;
  byOutput.textContent = by;
  betalingOutput.textContent = betaling;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
