let listaNumeri = [];
for (let i = 0; i < 5; i++){
    do{
        numeroRandom=getRandomInt(1,100);
        listaNumeri.push(numeroRandom);
    }while(listaNumeri[i] != numeroRandom);
}
alert(listaNumeri);
setTimeout(function(){
    let listaScelte = [];
    for(let i = 0; i < 5; i++){
        let numeroScelto= parseInt(prompt('inserisci un numero compreso fra 1 e 100'));
        while(numeroScelto < 0 || numeroScelto > 100 || isNaN(numeroScelto)){
            numeroScelto= parseInt(prompt('inserisci un numero compreso fra 1 e 100'));
            if(isNaN(numeroScelto)){
                alert(numeroScelto + ' non e` un numero, inserisci un numero compreso tra 1 e 100');
            }else if(numeroScelto < 0 || numeroScelto > 100){
                alert(numeroScelto + ' non hai in serito un numero valido, inserisci un numero compreso fra 1 e 100');
            }
        }
        listaScelte.push(numeroScelto);  
    }
    let numeriEsatti =[];
    let y;
    for (let i = 0; i < 5; i++){
        y = listaScelte[i];
        if(listaNumeri.includes(y)){
        numeriEsatti.push(y);
        }
    }
     console.log('Hai azzecato ' + numeriEsatti.length + ' Numeri, i seguenti: ' + numeriEsatti);
}, 30000);
/* function timer(){
    let listaScelte = [];
    for(let i = 0; i < 5; i++){
        let numeroScelto= parseInt(prompt('inserisci un numero compreso fra 1 e 100'));
        while(numeroScelto < 0 || numeroScelto > 100 || isNaN(numeroScelto)){
            numeroScelto= parseInt(prompt('inserisci un numero compreso fra 1 e 100'));
            if(isNaN(listaScelte[i])){
                alert(listaScelte[i] + ' non e` un numero, inserisci un numero compreso tra 1 e 100');
            }else if(listaScelte[i] < 0 || listaScelte[i] > 100){
                alert(listaScelte[i] + ' non hai in serito un numero valido, inserisci un numero compreso fra 1 e 100');
            }
        }
        listaScelte.push(numeroScelto);  
    }
    let k = 0;
    let numeriEsatti =[];
    let y;
    for (let i = 0; i < 5; i++){
        y = listaScelte[i];
        if(listaNumeri[i] == y){
        k = k+1;
        numeriEsatti.push(y);
    }
    return console.log('Hai azzecato ' + k + ' Numeri, i seguenti: ' + numeriEsatti);
    }
} */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}