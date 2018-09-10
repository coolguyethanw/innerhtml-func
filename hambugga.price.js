var hamburger = {
veg: ["lettece","Tomato","onion"],
meat:"shark",
mayo:true,
mustard: false,
ketchup:true,
price:50,
ounces: 8,
}
var x = prompt("what is the new price of the hamburger?");
hamburger.price = x;
window.alert(hamburger.price)

//ask user for how many they want to buy
// tell them how much it will be and how many ounces they will get
var asker = prompt("welcome to mcdonalds how may i fuck up your simple order? How many b i g macs do you want?")
window.alert([asker] * hamburger.ounces + " ounces of hamburger ordered!")

window.alert("will cost " + [asker] * hamburger.price + "$ dollars!")