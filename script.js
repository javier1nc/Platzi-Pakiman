// script.js
var imagenes = [];
imagenes["Cauchin"] = "images/vaca.png";
imagenes["Pokacho"] = "images/pollo.png";
imagenes["Tocinauro"] = "images/cerdo.png";
imagenes["Aulin"] = "images/lobo.png";


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", "tierra", "100", "30"));
coleccion.push(new Pakiman("Pokacho", "electrico", "80", "50"));
coleccion.push(new Pakiman("Tocinauro", "fuego", "120", "40"));
coleccion.push(new Pakiman("Aulin", "electrico", "140", "60"));

// for (var index in coleccion) {
//   console.log(coleccion[index]);
// }

for (var object of coleccion) {
  object.mostrar();
}