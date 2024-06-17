function mensaje() {

    var nombre = document.getElementById("Nombre").value;
    var fono = document.getElementById("Fono").value;
    var fecha = document.getElementById("Fecha").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var ciudad = document.getElementById("Ciudad").value;
    var genero;
    var generos = document.getElementsByName('genero');

    for (var i = 0, length = generos.length; i < length; i++) {
        if (generos[i].checked) {
            genero = generos[i].value;
            break;
        }
    }

    alert("Los datos ingresados son: \n" +
        "Nombre: " + nombre + "\n" +
        "Fono: " + fecha + "\n" +
        "Fecha: " + fecha + "\n" +
        "Email: " + email + "\n" +
        "Password: " + password + "\n" +
        "Ciudad: " + ciudad + "\n" +
        "Genero: " + genero + "\n")

}