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



