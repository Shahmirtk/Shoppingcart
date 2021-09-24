const cart = document.getElementById('cart');
var items = document.getElementById('item');
var itemList = document.getElementById('item-list');

console.log(cart,items,itemList)

cartEventListeners ();
function cartEventListeners () {
  items.addEventListener('click', buyItem());
}

function buyItem() {

}
