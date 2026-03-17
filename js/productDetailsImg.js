document.querySelector("#product_img_1").addEventListener("click", change);
function change() {
  document.querySelector("#primary_img_change1").classList.remove("hide");
  document.querySelector("#primary_img_change").classList.add("hide");
  document.querySelector("#primary_img_change2").classList.add("hide");
  console.log("der klikkes");
}

document.querySelector("#product_img_2").addEventListener("click", change2);
function change2() {
  document.querySelector("#primary_img_change2").classList.remove("hide");
  document.querySelector("#primary_img_change").classList.add("hide");

  document.querySelector("#primary_img_change1").classList.add("hide");
  console.log("der klikkes");
}

document.querySelector("#product_img_3").addEventListener("click", change3);
function change3() {
  document.querySelector("#primary_img_change").classList.remove("hide");
  document.querySelector("#primary_img_change1").classList.add("hide");
  document.querySelector("#primary_img_change2").classList.add("hide");
  console.log("der klikkes");
}
