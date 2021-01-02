// pakiman.js
class Pakiman {
  constructor(name, type, life, attack) {
    this.nombre = name;
    this.tipo = type;
    this.vida = life;
    this.ataque = attack;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];
  }
  hablar() {
    alert(this.nombre);
  }
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<br>")
    document.write("<strong>" + this.nombre + "</strong><br>");
    document.write("Tipo: " + this.tipo + "<br>");
    document.write("Vida: " + this.vida + "<br>");
    document.write("Ataque: " + this.ataque + "<br>");
    document.write("<hr>")
  }
}