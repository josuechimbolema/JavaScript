const contenido = document.getElementById("contenido");

let nombre = " Josue Jacob"
let edad = 23;

let edades = [23, 37, 7, 69, 25, 99];

console.log(edades.length);

addcontent(`<h2>${nombre}</h2><h3>${edad}</h3>`);

for(let i = 0; i < edades.length; i++){
    
    addcontent(`<h3> la edad es de ${edades[i]} años</h3>`)
    
}

function addcontent(newcontent){  
    contenido.innerHTML += newcontent;
}





