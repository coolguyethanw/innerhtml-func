var sushi = {
	fishType: "Ahi",
  sauce:"Sriacha",
  price: 100.00,
  rice:"Black",
  ounces: 8
}

var x = sushi.sauce;
window.alert(x);

// ask user for how much spice ahi 2 buy
var amount = prompt("Amount to buy?");

//Display the total amount of ounces the user will buy
window.alert("you are buying" + " " + amount * sushi.ounces + " " + "ounces!");
// then display the total dollar amount
var totalDollar = amount * sushi.price;
window.alert("Your total price is " + [totalDollar]);