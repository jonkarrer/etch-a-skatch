var papi = document.createElement("div");
papi.setAttribute("id", "main");
document.body.appendChild(papi);

var divUno = document.createElement("div");
divUno.style.color = "red";
divUno.setAttribute("id", "gridContainer");
papi.appendChild(divUno);



function makeGrid() {
    "use strict";
    var i = 0;
 
    while (i < 256 ) {
        var divDos = document.createElement("h");
        divDos.className = "gridKid";
        divUno.appendChild(divDos);
        i++;
    }
    
}
    
console.log(makeGrid());


document.querySelectorAll('.gridKid').forEach(item => {
  item.addEventListener('mouseover', event => {
   item.style.backgroundColor = "red";
  })
})






