//ANIMACION

$(".title").animate({  left:'250px',
opacity:'0.5',
height:'150px',
width:'150px'   }, 
"slow",             
function(){        
    console.log("final de animación");
});















//DARK MODE

const theme = () =>{
    if(localStorage.getItem("modo") == "oscuro"){
        aclarar()
    }else{
        oscurecer()
    }

}

const oscurecer = () =>{
    $("body").css("background-color", "black")
    $("p").css("color", "grey")
    $("h2").css("color", "white")
    $("input").css("color", "grey")
    $("header").css("background-color", "white")
    $("h2").css("color", "violet")
    
    localStorage.setItem("modo", "oscuro")
}

const aclarar = () =>{
    $("body").css("background-color", "#cfc6ca")
    $("p").css("color", "black")
    $("h2").css("color", "white")
    $("input").css("color", "white")
    $("header").css("background-color", "#cfc6ca")
    $("h2").css("color", "pink")

    localStorage.setItem("modo", "light")
}




$("#switch").click(theme);



//VIDEO