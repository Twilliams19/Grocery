"use strict"
var grocery = ["Fruit", "Meat", "Bread", "Soup", "Milk", "Snacks", "Mouthwash", "Toothpaste", "Cakes", "Pies"];
var i = 0;

while(i<grocery.length){
    console.log(grocery[i]);
    i++;
}
var store = "Kroger Is The Best With the Best Price's";
for(var j=0;j < store.length; j++){
    console.log(j);
}

function strUpcase(){
    var Upcase=prompt("This is UperCase");
    for(var i=0; i<= (Upcase.length - 1) ; i++){
        console.log(Upcase[i].toUpperCase());
    }   

    
}
strUpcase();
 


var inventory = [["Apple",4],["mac",3],["rice",1],["steak",2],["oranges",9],["pasta",6],["pie",8],["chips",10],["hotdogs",7],["burgers",5]];
var inventorylist= inventory.join("\n");
    console.log(inventorylist);
function listitems() {
    for (var i=0; i < inventory.length-1; i++);{
        // console.log(inventory[i][0],inventory[i][1]);
    }
}
 listitems();   










