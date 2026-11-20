function add(a, b) {
  return a + b;
}

function total(items) {
  return items.reduce((sum, item) => add(sum, item.price * item.qty), 0);
}

module.exports = { add, total };
