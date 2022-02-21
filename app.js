/*----Modal Function---------- */
const iconClose = document.querySelector('.iconClose');
const btnRules = document.querySelector('.btnRules');
const modal = document.querySelector('.conteiner-modal');

btnRules.addEventListener('click', () => {
    console.log("a");
    modal.classList.add('active')});
iconClose.addEventListener('click', () => {modal.classList.remove('active')});

document.querySelector(".reset").addEventListener("click", ()=>{
    i = 0;
    puntaje.textContent = i;
})
/*Logic */

const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijera = document.querySelector('#tijera');

const indicador = document.querySelector("#indicador");
const playAgain = document.querySelector("#playAgain");



/**********Indicador de victoria o derrota*************/
let game = document.querySelector('.game');
let resultado = document.querySelector('#indicador');



const imgPapel = "./images/icon-paper.svg";
const imgRock = "./images/icon-rock.svg";
const imgScissor = "./images/icon-scissors.svg";

const bordes = document.querySelector('#handImage');

papel.addEventListener("click",()=>{
    juego("papel", imgPapel);
    bordes.classList = "handImageContainer boton azul"

});


piedra.addEventListener("click",()=>{
    juego("piedra", imgRock);
    bordes.classList = "handImageContainer boton rojo"

});


tijera.addEventListener("click",()=>{
    juego("tijera", imgScissor);
    bordes.classList = "handImageContainer boton amarillo";
});


let puntaje = document.querySelector('#puntaje');
let i = 0;



/*------------------TOGLE---------- */
const box = document.querySelector('.box');
const containerHands = document.querySelector('.containerHands');



const newGame = document.querySelector('.newGame').addEventListener('click', () =>{
    box.classList.remove('ocultar');
    containerHands.classList.remove('show');
    document.querySelector('.referee');
    //i = 1;
    


})


const decision = document.querySelector('#final-decision');
const computadora = document.querySelector('#handComputer');


function juego(parametro, img){

    let array = [imgPapel, imgRock, imgScissor];

    let random = Math.floor(Math.random() * 3);

    //document.querySelector('#userPickImage').src = img;
    document.querySelector('#handImage').style.backgroundImage  = `url(${img})`;

    //document.querySelector('#computerPickImage').src = array[random];
    document.querySelector('#handComputer').style.backgroundImage  = `url(${array[random]})`;
    
    box.classList.add('ocultar');
    containerHands.classList.add('show');

    
    if(random == 0){
        computadora.classList = "handImageContainer boton azul";
    }else if(random == 1){
        computadora.classList = "handImageContainer boton rojo";
    }else{
        computadora.classList = "handImageContainer boton amarillo";
    }
    console.log(parametro," ",array[random]);
    
    if((parametro == "piedra" && array[random] == imgScissor) || 
       (parametro == "papel" && array[random] == imgRock) ||
       (parametro == "tijera" && array[random] == imgPapel)){
        console.log("Ganó, i: "+i);
        i++;
        console.log("Ganó, i: "+i);
        puntaje.textContent = i;
        decision.textContent = 'YOU WIN';
        
    }else if ((parametro == "piedra" && array[random] == imgRock) || 
             (parametro == "papel" && array[random] == imgPapel) ||
             (parametro == "tijera" && array[random] == imgScissor))
    {
        console.log("Empató");
        decision.textContent = 'DRAW'; 
    }else{
        console.log("Perdio, i: "+i);
        (i>0)?i--:i=0;
        //i--;
        console.log("Perdio, i: "+i);

        puntaje.textContent = i;
        decision.textContent = 'LOSE';
    }
}




