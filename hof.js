const customers = [
    { id: 1, name: "Alice", email: "alice@example.com", location: { city: "New York", country: "USA" } },
    { id: 2, name: "Bob", email: "bob@example.com", location: { city: "Paris", country: "France" } },
    { id: 3, name: "Jack", email: "jackb@example.com", location: { city: "Moscow", country: "Russia" } },
    { id: 4, name: "Carlos", email: "carlos@example.com", location: { city: "Texas", country: "USA" } },
    { id: 5, name: "Arif", email: "arif@example.com", location: { city: "Baku", country: "Azerbaijan" } },
    { id: 6, name: "Ruslan", email: "ruslan@example.com", location: { city: "Gence", country: "Azerbaijan" } },
];
  
const orders = [
    { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: "Smartphone", quantity: 3, price: 800 },
    { orderId: 103, customerId: 3, product: "mp3Player", quantity: 4, price: 200 },
    { orderId: 104, customerId: 4, product: "Monitor", quantity: 2, price: 400 },
    { orderId: 105, customerId: 5, product: "Keys", quantity: 2, price: 1400 },
    { orderId: 106, customerId: 6, product: "Mouse", quantity: 8, price: 50 },
];

const customerEmails = customers.map((customer) => customer.email);

const greaterValue = customers.filter(
  ({ quantity, price }) => quantity * price >= 1000
);

const findName = (customerName) => {
  return customers.find((customer) => customer.name === customerName);
};
console.log(findName("Alice"));

const findOrderId = (orderId) => {
  return orders.findIndex((order) => order.orderId === orderId);
};

console.log(findOrderId(102));

const checkCountry = (country) => {
  return customers.some(
    (customer) =>
      customer.location.country.toLowerCase() === country.toLowerCase()
  );
};
console.log(checkCountry("USA"));
console.log(checkCountry("Azerbaijan"));

orders.forEach((order) => {
  const customer = customers.find(
    (customer) => customer.id === order.customerId
  );

  const customerName = customer ? customer.name : "Customer not found";

  console.log(
    `Order #${order.orderId} by ${customerName}: ${order.quantity} x ${
      order.product
    } - $${order.price} each - total: $${order.quantity * order.price}`
  );
});

const sortedCustomers= customers.sort(customer=>customer.name)
console.log(sortedCustomers);
