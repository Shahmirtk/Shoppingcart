// This verifies whether the whole page is loaded
document.addEventListener('DOMContentLoaded', function initial() {

  // Use buttons
  document.querySelector('#cart').addEventListener('click', () => {});
  items = document.querySelectorAll('.item');

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => buyItem(items[i]));
  }

  //document.querySelector('#item-list').addEventListener('click', () => {});
})

function buyItem(item) {
  console.log(item);
  // you can now do something else with this item, like adding them to the cart.html DOM
}