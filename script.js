// Pierwsze uruchomienie , po drugim elementy są już przechowywawane w local storage.
/*let myObj1 = {
  LP: 0,
  name: "Chipsy",
  count: 3,
  prize: 37,
  sum: 0,
};
//<div class="LsOutput"></div>
let myObj2 = {
  LP: 0,
  name: "Cola",
  count: 1,
  prize: 12,
  sum: 0,
};

let myObj3 = {
  LP: 0,
  name: "Bread",
  count: 2,
  prize: 133,
  sum: 0,
};

localStorage.clear();
let myObj1S = JSON.stringify(myObj1);
let myObj2S = JSON.stringify(myObj2);
let myObj3S = JSON.stringify(myObj3);

localStorage.setItem(0, myObj1S);
localStorage.setItem(1, myObj2S);
localStorage.setItem(2, myObj3S);*/
function Dodaj() {
  console.log(localStorage.length);
  let myObj = {
    LP: localStorage.length,
    name: document.getElementById("nazwa").value,
    count: document.getElementById("ilosc").value,
    price: document.getElementById("cena").value,
    sum: this.count * this.price,
  };
  localStorage.setItem(localStorage.length, JSON.stringify(myObj));
}

//Tabela ze wszystkich elementów paragonu
var table = document.getElementById("myTable");
var suma = 0;
var Zakupy = new Array();

for (let i = 0; i < localStorage.length + 1; i++) {
  const key = localStorage.key(i);
  let ObjD = JSON.parse(localStorage.getItem(key));
  var row = table.insertRow(i + 1);
  var LP = row.insertCell(0);
  var Name = row.insertCell(1);
  var Count = row.insertCell(2);
  var Price = row.insertCell(3);
  var Sum = row.insertCell(4);
  ObjD.sum = ObjD.price * ObjD.count;
  LP.innerHTML = i;
  ObjD.LP = i;
  Name.innerHTML = ObjD.name;
  Count.innerHTML = ObjD.count;
  Price.innerHTML = ObjD.price;
  Sum.innerHTML = ObjD.sum;
  suma += ObjD.sum;
  Zakupy[i] = ObjD;
}
console.log(Zakupy);

var Razem = document.getElementById("razem");
Razem.innerHTML += suma;

//var row2=table.deleteRow(2);

// Usunięcie Elementu: localStorage.removeItem("myObj1");
//console.log(localStorage);