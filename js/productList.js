const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");
const header = document.querySelector(".productlist_header");
const listContainer = document.querySelector(".productlist_1_1");
const sortByPriceBtns = document.querySelectorAll(".sortByPriceBtn");
const selectedTag = urlParams.get("tag");

let allProducts = [];

function fetchCategoryData(category) {
  const url = category ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products`;

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

      let discountedPrice = price;
      if (discount) {
        discountedPrice = price - (price * discount) / 100;
      }

      let priceHTML;
      let imageClass = "productlist_img";
      let almostSoldOutBadge = "";

      if (stock <= 0) {
        priceHTML = `<span class="sold_out">Sold out</span>`;
        imageClass = "productlist_img_soldout";
      } else {
        if (stock <= 9) {
          almostSoldOutBadge = `<span class="almostSoldOut_badge">Kun få tilbage</span>`;
        }

        if (discount) {
          priceHTML = `
            <span class="old_price"><s>${price} DKK</s></span>
            <span class="discounted_price">${discountedPrice.toFixed(2)} DKK</span>
          `;
        } else {
          priceHTML = `<span>${price} DKK</span>`;
        }
      }

      return `
        <article class="productlist_card">
          <div class="img_container">
            <p>${discount > 0 ? `<span class="badge">-${Math.round(discount)}%</span>` : ""}
            ${almostSoldOutBadge}</p>
            <a href="productDetails.html?id=${product.id}" class="productlist_view">
              <img class="${imageClass}" src="${product.images[0]}" alt="${product.title}">
            </a>
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
//Sortering af pris
function sortByPrice() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  getProducts(sorted);
}

sortByPriceBtns.forEach((btn) => {
  btn.addEventListener("click", sortByPrice);
});

fetchCategoryData(selectedCategory);
