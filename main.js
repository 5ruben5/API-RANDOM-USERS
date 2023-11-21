let imagenUsuario = document.getElementsByTagName("img")[0];

let texto = document.getElementsByTagName("p")[0];

let usuario = document.getElementsByTagName("img")[1];
let correo = document.getElementsByTagName("img")[2];
let calendario = document.getElementsByTagName("img")[3];
let mapa = document.getElementsByTagName("img")[4];
let telefono = document.getElementsByTagName("img")[5];
let contraseña = document.getElementsByTagName("img")[6];

let boton = document.getElementsByTagName("button")[0];

//Boton que recarga la página
boton.addEventListener("click", function () {
    getDatos();
})



async function getDatos() {
    const response = await fetch("https://randomuser.me/api/");
    const person = await response.json();
    console.log(person);

    console.log(person.results[0].login.username)
    imagenUsuario.src = person.results[0].picture.large;
    texto.textContent = person.results[0].login.username;





    //Con opacity podemos cambiar la transparencia 
    usuario.addEventListener("mouseover", function () {
        usuario.style.opacity = "0.5";
        texto.textContent = person.results[0].login.username;
    });
    usuario.addEventListener("mouseout", function () {
        usuario.style.opacity = "1";
    });


    correo.addEventListener("mouseover", function () {
        correo.style.opacity = "0.5";
        texto.textContent = person.results[0].email;
    });
    correo.addEventListener("mouseout", function () {
        correo.style.opacity = "1";
    });


    calendario.addEventListener("mouseover", function () {
        calendario.style.opacity = "0.5";
        texto.textContent = person.results[0].dob.date;
    });
    calendario.addEventListener("mouseout", function () {
        calendario.style.opacity = "1";
    });


    mapa.addEventListener("mouseover", function () {
        mapa.style.opacity = "0.5";
        texto.textContent = person.results[0].location.street.name;
    });
    mapa.addEventListener("mouseout", function () {
        mapa.style.opacity = "1";
    });


    telefono.addEventListener("mouseover", function () {
        telefono.style.opacity = "0.5";
        texto.textContent = person.results[0].phone;
    });
    telefono.addEventListener("mouseout", function () {
        telefono.style.opacity = "1";
    });


    contraseña.addEventListener("mouseover", function () {
        contraseña.style.opacity = "0.5";
        texto.textContent = person.results[0].login.password;
    });
    contraseña.addEventListener("mouseout", function () {
        contraseña.style.opacity = "1";
    });

}


getDatos();
