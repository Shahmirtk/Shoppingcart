// This verifies whether the whole page is loaded
document.addEventListener('DOMContentLoaded', function initial() {

  // nav for cart
  document.querySelector('#cart-nav').addEventListener('click', () => viewCart());

  // nav for home
  document.querySelector('#shop-nav').addEventListener('click', () => viewShop());

  // without this var keyword it would become global
  var items = document.querySelectorAll('.item');

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => buyItem(items[i]));
  }

  //document.querySelector('#item-list').addEventListener('click', () => {});
})

var items = [];
var total = 0;

function buyItem(item) {
  console.log(item);
  items = [...items, item];

  // price extraction
  var price = item.getElementsByClassName("item-price")[0].innerHTML;

  // convert price to number from string
  var price = parseInt(price);
  console.log(price);

  // this adds to the total
  total += price;
}

function viewCart() {
  // hide the shop
  document.querySelector('#shop-view').style.display = "none";
  // show the cart
  document.querySelector('#cart-view').style.display = "block";
  //update the total
  document.querySelector('#total-bill').innerHTML = total;

  // this prevents duplication
  document.querySelector('#cart-items').innerHTML = null;

  // display each item in the cart
  items.forEach((item) => {
    document.querySelector('#cart-items').insertAdjacentHTML('afterbegin', item.outerHTML);
  });
}

function viewShop() {
  // hide the cart
  document.querySelector('#cart-view').style.display = "none";
  // show the cart
  document.querySelector('#shop-view').style.display = "block";
}