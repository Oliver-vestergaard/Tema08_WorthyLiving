const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//Detter er for at tjekke at jeg får oplysninger ind

const productURL = "https://dummyjson.com/products/" + id;
const productcontainer = document.querySelector("#productContainer");

console.log("id:", id);

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  const discount = data.discountPercentage;

  let newPrice = "";

  if (discount > 0) {
    newPrice = Math.round(data.price * (1 - data.discountPercentage / 100));
  } else {
    discountClass = "";
  }

  productcontainer.innerHTML = `
   

 <div class="heading-wrapper">
                <p class="eyebrow">WORTHY LIVING</p>
                <h1>${data.title}</h1>
            </div>


            <div class="primary_img_container">
                <img id="primary_img_change" class="mainProduct_img" src="${data.images[0]}" alt="billede af produkt">


                <img id="primary_img_change1" class="mainProduct_img hide" src="${data.images[1]}"
                    alt="billede af produkt">
                <img id="primary_img_change2" class="mainProduct_img hide" src="${data.images[2]}"
                    alt="billede af produkt">







                <div class="secondaryProduct_img_Container">
                    <img id="product_img_1" class="secondaryProduct_img ${data.images[1] ? "" : "hide"}" src="${data.images[1] || ""}"  alt="billede af produkt">  
                    <img id="product_img_2" class="secondaryProduct_img ${data.images[2] ? "" : "hide"}" src="${data.images[2] || ""}"  alt="billede af produkt">
                    <img id="product_img_3" class="secondaryProduct_img ${data.images[0] ? "" : "hide"}" src="${data.images[0] || ""}"  alt="billede af produkt"> 
                </div>
            </div>

            <div class="Product_information">

            
            


                <p class="price ${data.discountPercentage > 0 ? "onsale" : ""}">${data.price} kr</p>
               <p class="newPrice" ${data.discountPercentage < 0 ? "hide" : ""}> ${newPrice}  kr </p>
              


                <p class="available" ${data.stock < 1 ? "soldout" : ""}"> ${data.stock < 1 ? "Udsolgt" : "På lager"}</p>











                <button class="Cta">Læg i Kurv</button>


                <article class="Accordion_container">
                    <details class="Accordion">
                        <summary>Beskrivelse</summary>


                        <p>${data.description}</p>
                    </details>



                    <details class="Accordion">
                        <summary>Detaljer</summary>
                        <div class="indholds_Detaljer">

                            <dl class="Accordion_list">
                                <dt class="${data.brand ? data.brand : "hide"}">Brand:</dt>
                                <dd>${data.brand || ""}</dd> <br>
                                <dt>Weight:</dt>
                                <dd>${data.weight}</dd> <br> <br>
                                <dl>
                                    <dt class="Dimensions">Dimensions</dt> <br>
                                    <dt>Width:</dt>
                                    <dd>${data.dimensions.width}</dd><br>
                                    <dt>Height:</dt>
                                    <dd>${data.dimensions.height}</dd><br>
                                    <dt>Depth:</dt>
                                    <dd>${data.dimensions.depth}</dd><br>
                                </dl>
                            </dl>
                        </div>

                    </details>

                    <details class="Accordion">
                        <summary>Kundeanmeldelser</summary>
                        <div class="reviewCard">
                            <p class="card_Information">${data.reviews[0].reviewerName} <br> ${data.reviews[0].comment} <br> ${data.reviews[0].rating}/5</p>
                        </div>

                        <div class="reviewCard">
                            <p class="card_Information">${data.reviews[1].reviewerName} <br> ${data.reviews[1].comment} <br> ${data.reviews[1].rating}/5</p>
                        </div>

                        <div class="reviewCard">
                            <p class="card_Information">${data.reviews[2].reviewerName} <br> ${data.reviews[2].comment} <br> ${data.reviews[2].rating}/5</p>
                        </div>


                    </details>

                </article>
            </div>



   `;
  addImageEvents();
}

// Images er klikbare og skifter
function addImageEvents() {
  document.querySelector("#product_img_1").addEventListener("click", () => {
    document.querySelector("#primary_img_change1").classList.remove("hide");
    document.querySelector("#primary_img_change").classList.add("hide");
    document.querySelector("#primary_img_change2").classList.add("hide");
    console.log("klik 1");
  });

  document.querySelector("#product_img_2").addEventListener("click", () => {
    document.querySelector("#primary_img_change2").classList.remove("hide");
    document.querySelector("#primary_img_change").classList.add("hide");
    document.querySelector("#primary_img_change1").classList.add("hide");
    console.log("klik 2");
  });

  document.querySelector("#product_img_3").addEventListener("click", () => {
    document.querySelector("#primary_img_change").classList.remove("hide");
    document.querySelector("#primary_img_change1").classList.add("hide");
    document.querySelector("#primary_img_change2").classList.add("hide");
    console.log("klik 3");
  });
}

getData();
