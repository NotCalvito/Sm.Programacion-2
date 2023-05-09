let contador = 1;
let numero;
while(contador <= 5){
    numero = window.prompt("Insertar Número: " + contador);
    contador++;
}
alert("Fin del programa");
alert("El contador ya no es menor que cinco");
document.write("El ultimo numero insertado es "+numero);