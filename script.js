let games_in_cart = {
    "cart": [
        { "name": "Dark Souls Remastered", "price": 19.99 },
        { "name": "Dark Souls 2 SOTFS", "price": 19.99 },
        { "name": "Dark Souls 3", "price": 29.99 },
        { "name": "Bloodeborne", "price": 39.99 },
        { "name": "Elden Ring", "price": 59.99 }
    ]
};

let jsonString = JSON.stringify(games_in_cart);
console.log(games_in_cart);

games_in_cart = JSON.parse(jsonString);

const table = document.getElementById("shopping-cart");

for (i in games_in_cart.cart) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    cell1.textContent = games_in_cart.cart[i].name;
    cell2.textContent = "$" + games_in_cart.cart[i].price;

    row.appendChild(cell1);
    row.appendChild(cell2);

    table.appendChild(row);
}

let total = 0;

for (i in games_in_cart.cart) {
    total += games_in_cart.cart[i].price;
}

console.log(total.toFixed(2));

const cartTotals = document.getElementById("cart-totals");

const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    cell1.textContent = games_in_cart.cart.length;
    cell2.textContent = "$" + total.toFixed(2);

    row.appendChild(cell1);
    row.appendChild(cell2);

    cartTotals.appendChild(row);
