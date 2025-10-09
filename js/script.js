let menuVisible = false;
//Funcion ocular o mostrar el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar menu una vez que seleccionan la opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

/*Funcion para aplicar animaciones*/
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = windows.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("transactsql");
        habilidades[7].classList.add("Wordpress");
    }
}

//scrolling para aplicar la animación de la barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
}