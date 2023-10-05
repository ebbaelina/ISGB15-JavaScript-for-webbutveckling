"use strict";

/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    oGameData.gameField = Array('', '', '', '', '', '', '', '', '');
    
    /* Testdata för att testa rättningslösning */
    //oGameData.gameField = Array('X', 'X', 'X', '', '', '', '', '', '');
    //oGameData.gameField = Array('X', '', '', 'X', '', '', 'X', '', '');
    //oGameData.gameField = Array('X', '', '', '', 'X', '', '', '', 'X');
    //oGameData.gameField = Array('', '', 'X', '', 'X', '', 'X', '', '');
    //oGameData.gameField = Array('X', 'O', 'X', '0', 'X', 'O', 'O', 'X', 'O');

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //"Flagga" som indikerar om användaren klickat för checkboken.
    oGameData.timerEnabled = false;

    //Timerid om användaren har klickat för checkboxen. 
    oGameData.timerId = null;
    


}

oGameData.checkHorizontal = function(){

    // Spelare X vinner horisontellt
    if(oGameData.gameField[0] == 'X' && oGameData.gameField[1] == 'X' && oGameData.gameField[2] == 'X') {
        console.log("Spelare X har vunnit");
        return 1; 
    }
    
    if(oGameData.gameField[3] == 'X' && oGameData.gameField[4] == 'X' && oGameData.gameField[5] == 'X'){
        console.log("Spelare X har vunnit"); 
        return 1; 
    }

    if(oGameData.gameField[6] == 'X' && oGameData.gameField[7] == 'X' && oGameData.gameField[8] == 'X'){
        console.log("Spelare X har vunnit"); 
        return 1; 
    }

    // Spelare O vinner horisontellt
    if(oGameData.gameField[0] == 'O' && oGameData.gameField[1] == 'O' && oGameData.gameField[2] == 'O') {
        console.log("Spelare O har vunnit");
        return 2; 
    }
    
    if(oGameData.gameField[3] == 'O' && oGameData.gameField[4] == 'O' && oGameData.gameField[5] == 'O'){
            console.log("Spelare O har vunnit"); 
            return 2; 
    }

    if(oGameData.gameField[2] == 'O' && oGameData.gameField[5] == 'O' && oGameData.GameField[8] == 'O'){
        console.log("Spelare O har vunnit");
        return 2; 
    }
}

    

    oGameData.checkVertical = function(){

        // Spelare X vinner vertikalt
        if(oGameData.gameField[0] == 'X' && oGameData.gameField[3] == 'X' && oGameData.gameField[6] == 'X'){
            console.log("Spelare X har vunnit"); 
            return 1; 
        }
    
        if(oGameData.gameField[1] == 'X' && oGameData.gameField[4] == 'X' && oGameData.gameField[7] == 'X'){
            console.log("Spelare X har vunnit"); 
            return 1; 
        }
    
        if(oGameData.gameField[2] == 'X' && oGameData.gameField[5] == 'X' && oGameData.gameField[8] == 'X'){
            console.log("Spelare X har vunnit"); 
            return 1; 
        }
    
        // Spelare O vinner vertikalt
        if(oGameData.gameField[0] == 'O' && oGameData.gameField[3] == 'O' && oGameData.gameField[6] == 'O'){
            console.log("Spelare O har vunnit"); 
            return 2; 
        }
        if(oGameData.gameField[1] == 'O' && oGameData.gameField[4] == 'O' && oGameData.gameField[7] == 'O'){
            console.log("Spelare O har vunnit"); 
            return 2;
        }
    
        if(oGameData.gameField[2] == 'O' && oGameData.gameField[5] == 'O' && oGameData.gameField&& [8] == 'O'){
            console.log("Spelare O har vunnit"); 
            return 2;
        }
        
        
    }

    oGameData.checkDiagonalLeftToRight = function(){
        //Spelare X vinner diagonalt
        if(oGameData.gameField[0] == 'X' && oGameData.gameField[4] == 'X' && oGameData.gameField[8] == 'X'){
            console.log("Spelare X har vunnit");
            return 1;
             
        }
        //Spelare O vinner diagonalt
        if(oGameData.gameField[0] == 'O' && oGameData.gameField[4] == 'O' && oGameData.gameField[8] == 'O'){
            console.log("Spelare O har vunnit"); 
            return 2;
        }  
    }

    oGameData.checkDiagonalRightToLeft = function(){  
        //Spelare X vinner diagonalt
        if(oGameData.gameField[2] =='X' && oGameData.gameField[4] == 'X' && oGameData.gameField[6] == 'X') {
            console.log("Spelare X har vunnit");
            return 1;    
        }
        //checkForGameOver(
            
        //)
        //Spelare O vinner diagonalt 
        if(oGameData.gameField[2] =='O' && oGameData.gameField[4] == 'O' && oGameData.gameField[6] == 'O') {
            console.log("Spelare O har vunnit"); 
            return 2;
            }
        }

    oGameData.checkForDraw = function(){
        
        
    
       for( let i = 0; i < 9; i++){
       if(oGameData.gameField[i] == ''){
            return 0; 
    }

    }
    return 3; 
}
    
        
    

/**
 * Kontrollerar för tre i rad.
 * Returnerar 0 om det inte är någon vinnare, 
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */
oGameData.checkForGameOver = function() {
    if(oGameData.checkHorizontal() == 1){
        return 1; 
    }

    if(oGameData.checkHorizontal() == 2){
        return 2; 
    }

    if(oGameData.checkVertical() == 1){
        return 1;
    }

    if(oGameData.checkVertical() == 2){
        return 2;
    }

    if(oGameData.checkDiagonalLeftToRight() == 1){
        return 1;
    }

    if(oGameData.checkDiagonalLeftToRight() == 2){
        return 2;
    }


    if(oGameData.checkDiagonalRightToLeft() == 1){
        return 1; 
    }

    if(oGameData.checkDiagonalRightToLeft() == 2){
        return 2; 
    }

    if(oGameData.checkForDraw() == 3){
        return 3; 
    }

    return 0; 
}
//Uppgift 1 - labb 2
window.addEventListener("load", function(){

    oGameData.initGlobalObject();
    document.getElementById('gameArea').classList.add('d-none'); 
    //Uppgift 2 - Labb 2 
    document.getElementById('newGame').addEventListener('click', validateForm);
    
});

//Uppgift 3 - labb 2
function validateForm () {

    let error = document.getElementById('errorMsg');

    let p1 = document.getElementById('nick1').value;
    let p2 = document.getElementById('nick2').value;
    let c1 = document.getElementById('color1').value;
    let c2 = document.getElementById('color2').value;
    //Try för att kolla nickname längd 
    try{
        if(p1.length < 5) 
        if(p2.length < 5) 
        throw("Nickname måste bestå av minst 5 tecken");
    } 
    catch (err){
        error.textContent = err; 
        return false; 
    }

    //Try för att kolla om nickname är lika 
    try{
        if(p1 == p2) throw("Nickname för spelare 1 och 2 får inte ha samma namn"); 
    }
    catch (err){
      error.textContent = err; 
      return false; 
    } 
    //try för att kolla valet av färg 
    try {
        if(c1 === '#ffffff') throw ("Ogiltig färg. Kan ej vara vit eller svart");
        else if(c2 === '#ffffff') throw("Ogiltig färg. Kan ej vara vit eller svart");
        else if(c1 === '#000000') throw("Ogiltig färg. Kan ej vara vit eller svart");
        else if(c2 === '#000000') throw("Ogiltig färg. Kan ej vara vit eller svart");
        else if(c1 === c2) throw ("Spelare 1 och 2 får ej välja samma färg"); 

    } catch (err){
        error.textContent = err; 
            return false;
    }

    //Uppgift 4 - labb 2
    oGameData.initiateGame()
    return true; 

}
    

//Uppgift 5 & 6 - labb 2
oGameData.initiateGame = function(){

    if(document.querySelector('#check').checked == true) {
        oGameData.timerId = setTimeout(timer, 5000);
    }
    
    document.getElementById('divInForm').classList.add('class', 'd-none'); 
    document.getElementById('gameArea').classList.remove('class', 'd-none'); 
    document.getElementById('errorMsg').innerHTML = '';

    oGameData.nickNamePlayerOne = document.getElementById('nick1').value; 
    oGameData.nickNamePlayerTwo = document.getElementById('nick2').value; 
    oGameData.colorPlayerOne = document.getElementById('color1').value; 
    oGameData.colorPlayerTwo = document.getElementById('color2').value; 
    
    //variabel för spelplan, tömmer spelplanen och sätter bakgrundsfärgen till vit
    let sp = document.querySelectorAll("td"); 
    
    for(let i = 0 ; i < sp.length; i++){
        sp[i].textContent = '';
        sp[i].style.backgroundColor = "#ffffff";
          
    }
    //Deklarerar de lokala variablerna playerChar och playerName
    let playerChar; 
    let playerName; 
    
    //Slumpa fram ett tal mellan 0 och 1 
    let slump; 
    slump = Math.random();
    //Om talet är mindre än 0.5
    if(slump < 0.5){
        playerChar = oGameData.playerOne;
        playerName = oGameData.nickNamePlayerOne;
        oGameData.currentPlayer = oGameData.playerOne;
        
    }
    //Om talet är större eller lika med 0.5 
    if(slump >= 0.5){
        playerChar = oGameData.playerTwo;
        playerName = oGameData.nickNamePlayerTwo;
        oGameData.currentPlayer = oGameData.playerTwo;
        
    }

    //Ändrar texten i h1-elementet som ligger i div-elementet med klassen ”jumbotron”
    document.querySelector('.jumbotron > h1').textContent = "Aktuell spelare är " + playerName + " (" + playerChar + ")";
    
    // en lyssnare på tabellen innehållande spelplanen som lyssnar efter händelsen ”klick”. Vid klick skall funktionen executeMove anropas
    document.querySelector('table').addEventListener('click', executeMove);
}

//Sätter ut spelarens bricka och byter spelare
function executeMove(e) {
    let target= e.target;
    console.log(e.target.getAttribute('data-id')); 
    
    //if-sats som kontrollerar att en td blivit klickad på och byter spelare
    if(e.target.tagName == 'TD'){
        oGameData.gameField[target.getAttribute('data-id')]= oGameData.currentPlayer;
        console.log(oGameData.currentPlayer + 'a');

        //Ändrar aktuell spelare 
        if(oGameData.currentPlayer == oGameData.playerOne){
            target.textContent = 'X';
            target.style.backgroundColor = oGameData.colorPlayerOne; 
            document.querySelector('.jumbotron > h1').textContent = "Aktuell spelare är " + oGameData.nickNamePlayerTwo + " (" + oGameData.playerTwo + ")";
            oGameData.currentPlayer = oGameData.playerTwo; 

        } else {
            target.textContent = 'O';
            target.style.backgroundColor = oGameData.colorPlayerTwo; 
            document.querySelector('.jumbotron > h1').textContent = "Aktuell spelare är " + oGameData.nickNamePlayerOne + " (" + oGameData.playerOne + ")";
            oGameData.currentPlayer = oGameData.playerOne;

        }
        
        //om spelare klickar på TD innan 5 sekunder avbryts timer och anropar funktionen timer för att starta timer på nytt 
        if(document.querySelector('TD').checked == true) {
            clearTimeout(oGameData.timerId);
            timer();
        }
        
        //Kontrollera vilken spelare som vunnit eller om det är oavgjort
        oGameData.checkForGameOver(); 

        if(oGameData.checkForGameOver() == 1 || oGameData.checkForGameOver() == 2 || oGameData.checkForGameOver() == 3){
            document.querySelector('table').removeEventListener('click', executeMove);
            document.querySelector('#divInForm').classList.remove('d-none');
            document.querySelector('#gameArea').classList.add('d-none');

            if(oGameData.checkForGameOver() == 1) {
                document.querySelector('.jumbotron > h1').textContent = oGameData.nickNamePlayerOne + "(" + oGameData.playerOne + ") vann! Spela igen? "; 
            } else if (oGameData.checkForGameOver() == 2) {
                document.querySelector('.jumbotron > h1').textContent = oGameData.nickNamePlayerTwo + "(" + oGameData.playerTwo + ") vann! Spela igen?";
            } else if (oGameData.checkForGameOver() == 3){
                document.querySelector('.jumbotron > h1').textContent = "Spelet oavgjort! Spela igen?";

            }
            clearTimeout(oGameData.timerId); 
            //Anropar initGlobalObject i oGameData och tar en tillbaka till startsidan
            oGameData.initGlobalObject();
        }   
    }
    

}

//Skapar p element och checkbox för timer
window.addEventListener('load', function checkboxTimer() {

    console.log(checkboxTimer);

    let form = document.querySelector("#divInForm");
    let knapp = document.querySelector("#divWithA");
    let p = document.createElement('p');
    let textNode = document.createTextNode(' Vill du begränsa tiden till 5 sekunder per drag?');
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute('id', 'check'); 

    p.classList.add('col-12'); 

    checkbox.setAttribute("type", "checkbox");
    p.appendChild(checkbox);

    p.appendChild(textNode);
    form.insertBefore(p, knapp);
         

});

//Funktion som startar timer på 5 sekunder samt byter aktuell spelare när timer startas om 
function timer() {
    console.log(timer); 

    if(oGameData.currentPlayer == oGameData.playerOne){
        document.querySelector('.jumbotron > h1').textContent = "Aktuell spelare är " + oGameData.nickNamePlayerTwo + " (" + oGameData.playerTwo + ")";
        oGameData.currentPlayer = oGameData.playerTwo;
    } else { 
        document.querySelector('.jumbotron > h1').textContent = "Aktuell spelare är " + oGameData.nickNamePlayerOne + " (" + oGameData.playerOne + ")";
        oGameData.currentPlayer = oGameData.playerOne;
    }

    //Timern skapas här nedan!
    oGameData.timerId = setTimeout(timer, 5000);
    
    


}



