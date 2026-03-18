const productURL = "https://dummyjson.com/products?limit=50";
const container = document.querySelector("#forsideContainer");

function getData() {
  fetch(productURL)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  const product = data.products;
  container.innerHTML = `
    <div id="forsidebilleder">
      <img src="${product[42].thumbnail}" alt="billede1">
      <img src="${product[44].thumbnail}" alt="billede2">
      <img src="${product[33].thumbnail}" alt="billede3">
    </div>

    <div class="kollektion"> 
            <h1>Vores kollektion</h1>
            
    
            <p>Vores sortiment består af fire nøje udvalgte kollektioner: Sofaer, Dekorationer, Råvarer og dyr. Hvert produkt er skabt med fokus på høj kvalitet og tidløst design – perfekt til dig, der værdsætter det lækre, enkle og rå udtryk.</p>
               
               <p> Vi kombinerer æstetik med bæredygtighed og økologi, så du kan nyde smukke, funktionelle produkter, der holder i længden – både for dig og for miljøet. Hver kollektion er en invitation til at opleve enkelthed, naturlige materialer og gennemført design i hjemmet eller hverdagen.</p>
            
    </div>
  <div class="grid-1-1"> 
  <div>
            <a href="productlist.html?category=furniture" class="knap"> Møbler </a>
             <img src="${product[12].thumbnail}" alt="billede4">
              </div>
              <div>
            <a href="productlist.html?category=home-decoration" class="knap"> Dekorationer </a>
             <img src="${product[44].thumbnail}" alt="billede5">
             </div>
              <div>
           <a href="productlist.html?category=groceries" class="knap"> Råvarer </a>
            <img src="${product[26].thumbnail}" alt="billede6">
             </div>
            <div>
           <a href="productlist.html?category=groceries&tag=pet%20supplies" class="knap"> Til dyr </a>
            <img src="${product[21].thumbnail}" alt="billede7">
            </div>
            </div>

  `;
}

getData();
