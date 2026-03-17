const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productURL = "https://dummyjson.com/products/" + id;
const productcontainer = document.querySelector("#productContainer");

console.log("id:", id);

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

// function show(data) {
//   productcontainer.innerHTML += `
//     <h1>${data.title}</h1>
//     <p>${data.description}</p>
//     <p>${data.price} kr</p>
//   `;
// }

getData();
