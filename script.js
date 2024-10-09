let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function toggleSubmenu(event) {
    event.preventDefault(); // Evita que el enlace salte
    const submenu = event.currentTarget.nextElementSibling;

    // Alterna la visibilidad del submenú
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none'; // Oculta el submenú
    } else {
        submenu.style.display = 'block'; // Muestra el submenú
        // Navega a la sección "SKILLS" si el submenú está visible
        window.location.hash = "skills"; 
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;

    // Oculta el submenú al seleccionar una opción
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
}



//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Java");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("JavaScript");
        habilidades[3].classList.add("ExpressNode");
        habilidades[4].classList.add("React");
        habilidades[5].classList.add("GitHub");
        habilidades[6].classList.add("Docker");
        habilidades[7].classList.add("Python");
        habilidades[8].classList.add("SringBoot");
        habilidades[9].classList.add("JPA");
        habilidades[10].classList.add("MySQL");
        habilidades[11].classList.add("SQLServer");
        habilidades[12].classList.add("Metodologiasgiles");
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//skillsdos
/*
// Función que aplica las animaciones de las habilidades
function efectoHabilidades1() {
    var skillsdos = document.getElementById("skillsdos");
    var distancia_skillsdos = window.innerHeight - skillsdos.getBoundingClientRect().top;
    if (distancia_skillsdos >= 300) {
        let habilidades1 = document.getElementsByClassName("progreso");
        habilidades1[0].classList.add("Responsabilidad");
        habilidades1[1].classList.add("Organización");
        habilidades1[2].classList.add("Comunicaciónefectiva");
        habilidades1[3].classList.add("TrabajoEnEquipo");
        habilidades1[4].classList.add("Adaptabilidad");
    
}

// Detecto el scrolling para aplicar la animación de las barras de habilidades
window.onscroll = function() {
    efectoHabilidades1();
}

}
*/
