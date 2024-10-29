const mundiales = [1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022];

let continuar = true;

while (continuar) {
let eleccion = Number(prompt("Ingresa tu año de nacimiento"));

const mundialesVividos = mundiales.filter(mundial => mundial >= eleccion);

alert("Has vivido todos estos mundiales: " +`${mundialesVividos}` ); 

alert(`En total ${mundialesVividos.length} mundiales 😮.`);

continuar = confirm("Queres probar de nuevo?");

}
