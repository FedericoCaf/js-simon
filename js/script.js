
function genRandNumb(max, min){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let arrayNumRandom = [];
let arrayNumIndovinati = [];
let arrayNumTentati = [];
let counterIndovinati = 0;

for (let i = 0; i < 5; i++) {
  let number = genRandNumb(1, 100);
  arrayNumRandom.push(number);
  document.querySelector('.numbers-box').innerHTML +=
  `
  ${number}       
  
  `
}

console.log('array num random', arrayNumRandom);

setTimeout(startGioco, 10000);

function startGioco(){

  document.querySelector('.numbers-box').innerHTML = '';
  for (let i = 0; i < 5; i++) {

    let numeroUtente = parseInt(prompt('inserisci un numero'));
    arrayNumTentati.push(numeroUtente);
    
      if(arrayNumRandom.includes(numeroUtente)) {
        arrayNumIndovinati.push(numeroUtente);
        counterIndovinati++;
        console.log(counterIndovinati);    
      }
   }
  
  console.log('array indovinati', arrayNumIndovinati);
  console.log('array tentati', arrayNumTentati);

    for (let i = 0; i < 5; i++) {

      if(arrayNumIndovinati.includes(arrayNumTentati[i])){

        document.querySelector('.numbers-box').innerHTML +=
        `  
        <span style="color:green">${arrayNumTentati[i]} </span> 
        `
      }else{
         document.querySelector('.numbers-box').innerHTML +=
        `  
        <span style="color:red">${arrayNumTentati[i]} </span> 
        `
      }
    }

     document.querySelector('.text').innerHTML = `
    Hai indovinato ${counterIndovinati} numeri
    `

    if(counterIndovinati===5){
      const winBox = document.querySelector('.win-box');
      winBox.classList.add('block');
    }
}
 



