const productURL = "https://dummyjson.com/products/40";
const container = document.querySelector("#produktbillede");

function getData() {
  fetch(productURL)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  container.innerHTML = `
    <div class="produktkort">
      <img src="${data.images[0]}" alt="${data.title}">
      
     
        <h2 class="produktnavn">${data.title}</h2>
        <p class="produktpris">${data.price}$</p>
      

    </div>
  `;
}

getData();

const checkoutForm = document.querySelector("#webform");
console.log("virker du?");

const mailOutput = document.querySelector("#mail_output");
const fornavnOutput = document.querySelector("#fornavn_output");
const efternavnOutput = document.querySelector("#efternavn_output");
const adresseOutput = document.querySelector("#adresse_output");
const postnummerOutput = document.querySelector("#postnummer_output");
const byOutput = document.querySelector("#by_output");
const betalingOutput = document.querySelector("#betaling_output");

function cancelPopup(event) {
  event.preventDefault();
  checkoutForm.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(checkoutForm);

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

  checkoutForm.reset();
}

checkoutForm.addEventListener("invalid", cancelPopup, true);
checkoutForm.addEventListener("submit", handleSubmit);
