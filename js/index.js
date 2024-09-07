//Alerta de cerrar sesión//
let CerrarSesion= document.querySelector(".bcsesion")

CerrarSesion.addEventListener("click",function(){
    alert("Sesión cerrada correctamente")
})

//Cambiar el color del botón al hacer click//
function cambiarFondo(elemento){
    elemento.classList.add('extra');
}

//Aumentar los likes//
let botones_Mg = document.querySelector('#like1');
botones_Mg.addEventListener('click', function(){
    let botónmg = parseInt(document.querySelector('#primero'). textContent);
    botónmg++;
    document.querySelector('#primero'). textContent = botónmg;
})

let bot_Mg = document.querySelector('#like2');
bot_Mg.addEventListener('click', function(){
    let botónmg = parseInt(document.querySelector('#segundo'). textContent);
    botónmg++;
    document.querySelector('#segundo'). textContent = botónmg;
})

let b_Mg = document.querySelector('#like3');
b_Mg.addEventListener('click', function(){
    let botónmg = parseInt(document.querySelector('#tercero'). textContent);
    botónmg++;
    document.querySelector('#tercero'). textContent = botónmg;
})

let boton_Mg = document.querySelector('#like4');
boton_Mg.addEventListener('click', function(){
    let botónmg = parseInt(document.querySelector('#cuarto'). textContent);
    botónmg++;
    document.querySelector('#cuarto'). textContent = botónmg;
})