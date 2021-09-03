let listaNumeri = [];
for (let i = 0; i < 5; i++){
    do{
        numeroRandom=getRandomInt(1,100);
        listaNumeri.push(numeroRandom);
    }while(listaNumeri[i] != numeroRandom);
}
alert(listaNumeri);
let listaScelte = [];
setTimeout(timer(listaScelte), 30000);
let k = 0;
let numeriEsatti =[];
let y;
for (let i = 0; i < 5; i++){
    y = listaScelte[i];
    if(listaNumeri[i] == y){
        k = k+1;
        numeriEsatti.push(y)
    }
}

console.log('Hai azzecato ' + k + ' Numeri, i seguenti: ' + numeriEsatti);

function timer(arr){
    for(let i = 0; i < 5; i++){
        arr.push(prompt('inserisci numero'));
    }
    return arr;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}