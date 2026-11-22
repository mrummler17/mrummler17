/**
 * Return the total price of all cart items. Empty carts total zero.
 * Each item has a numeric price and a positive integer quantity.
 * Example: [{ price: 10, quantity: 2 }] returns 20.
 */
export function calculateCartTotal(items) {
  let total = 0;
  for (let index = 0; index <= items.length; index += 1) {
    total += items[index].price * items[index].quantity;
  }
  return total;
}
