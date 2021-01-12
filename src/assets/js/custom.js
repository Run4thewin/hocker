function closeModal() {
    document.getElementById("closeModal").style.display = "none";
}

//Cookies consent function
// (function{}) is the new onready
(function(){   
    setTimeout(function () {

        //Checks if localStorage already has item cookieSeen and accepted state; 
        //otherwise creates this item and the state 

        if (localStorage.getItem("cookieSeen") != "accepted") {

            $("#cookiesAlert").fadeIn(200);
            localStorage.setItem("cookieSeen", "accepted");
        }

    }, 6000);    
});   

//Closing the modal above
function closeAlert() {
    $("#cookiesAlert").fadeOut(200);
}

//Servicios


function displayServicios(service) {

    //Hides current section

    document.getElementById("mainImg").style.display = "none"; 
    document.getElementById("servicesList").style.display = "none"; 

    //Shows other sections accordingly

    if (service == 'administracion') { 
       
        document.getElementById("displayAdministracion").style.display = "block"; 
        document.getElementById("administracionImg").style.display = "block"; 

    } else if (service == 'mantenimiento') 
    
    { 
       
        document.getElementById("displayMantenimiento").style.display = "block"; 
        document.getElementById("mantenimientoImg").style.display = "block"; 

    } else if (service == 'limpieza') 
    
    { 
        document.getElementById("displayLimpieza").style.display = "block"; 
        document.getElementById("limpiezaImg").style.display = "block"; 

    } else if (service == 'seguridad') 
    
    { 
        document.getElementById("displaySeguridad").style.display = "block"; 
        document.getElementById("seguridadImg").style.display = "block"; 

    } else if (service == 'soluciones') 
    
    { 
        document.getElementById("displaySoluciones").style.display = "block"; 
        document.getElementById("solucionesImg").style.display = "block"; 

    } else if (service == 'venta') 
    
    { 
        document.getElementById("displayVenta").style.display = "block"; 
        document.getElementById("ventaImg").style.display = "block"; 
    }
}

//Closing dropdown menu on click out
$(document).on('click', function(event) {
    if ((!$(event.target).closest('#header').length) && ($("#nav").hasClass("show"))) {
        document.getElementById("menuToggler").click( );
    }
});




