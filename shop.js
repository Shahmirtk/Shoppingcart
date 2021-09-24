const cart = document.getElementById('cart');
var items = document.getElementById('item');

console.log(cart,items,itemList)

cartEventListeners ();
function cartEventListeners () {
  items.addEventListener('click', buyItem());
}

function buyItem() {

}
