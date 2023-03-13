/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
let filas;
let columnas;
let contador;
do{
    filas = prompt("numero de filas");
}while(isNaN(filas))
do{
    columnas = prompt("numero de columnas");
}while(isNaN(columnas))
filas = parseInt(filas);
columnas = parseInt(columnas);
contador = filas*columnas;
document.write("<table>");
for (let index = 0; index < filas; index++) {
    document.write("<tr>")
    for (let j = 0; j < columnas; j++) {
        document.write(`<td>${contador}</td>`);
        contador--;     
    }
    document.write("</tr>");
}
document.write("</table>");