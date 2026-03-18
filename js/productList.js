const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");
const header = document.querySelector(".productlist_header");
const listContainer = document.querySelector(".productlist_1_1");
const sortByPriceBtns = document.querySelectorAll(".sortByPriceBtn");
const selectedTag = urlParams.get("tag");

let allProducts = [];

function fetchCategoryData(category) {
  const url = `https://dummyjson.com/products/category/${category}`;

  if (category) {
    const productlistHeader = category.charAt(0).toUpperCase() + category.slice(1);
    header.textContent = productlistHeader;
  } else {
    header.textContent = "Alle Produkter";
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let products = data.products;
      //bruge de tags i JSON til at fetch data specifikt til "tilbehør til dyr" --> tagget skrives i html a tag
      if (selectedTag) {
        products = products.filter((product) => product.tags.includes(selectedTag));
      }
      allProducts = products;
      getProducts(allProducts);
    });
}

function getProducts(products) {
  listContainer.innerHTML = products
    .map((product) => {
      const price = product.price;
      const discount = product.discountPercentage;
      const stock = product.stock;

      let discountedPrice;
      if (discount) {
        discountedPrice = price - (price * discount) / 100;
      } else {
        discountedPrice = price;
      }

      let priceHTML;
      if (stock <= 0) {
        priceHTML = `<span class="sold_out">Sold out</span>`;
      } else if (discount) {
        priceHTML = `
          <span class="old_price"><s>${price} DKK</s></span>
          <span class="discounted_price">${discountedPrice.toFixed(2)} DKK</span>
        `;
      } else {
        priceHTML = `<span>${price} DKK</span>`;
      }

      let imageClass;
      if (stock <= 0) {
        imageClass = "productlist_img_soldout";
      } else {
        imageClass = "productlist_img";
      }

      return `
        <article class="productlist_card">
        <div class="img_container">
          <p>${product.discountPercentage > 0 ? `<span class="badge">-${product.discountPercentage}%</span>` : ""} </p>
          <a href="productDetails.html?id=${product.id}" class="productlist_view"><img class="${imageClass}" src="${product.images[0]}" alt="${product.title}"></a>
          </div> 
          <h3 class="productlist_title">${product.title}</h3>
          <p class="productlist_price">
          ${priceHTML} 
          </p>
           <a href="productDetails.html?id=${product.id}" class="buy_btn">Læg i kurv</a>
        </article>
      `;
    })
    .join("");
}

//Sortering
function sortByPrice() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  getProducts(sorted);
}

sortByPriceBtns.forEach((btn) => {
  btn.addEventListener("click", sortByPrice);
});

fetchCategoryData(selectedCategory);
