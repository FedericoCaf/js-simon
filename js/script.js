
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

setTimeout(startGioco, 3000);

function startGioco(){
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
  
    document.querySelector('.text').innerHTML = `
    Hai indovinato ${counterIndovinati} numeri
    `
    document.querySelector('.numbers-box').innerHTML = `
    ${arrayNumIndovinati}
    `

//     for (let i = 0; i < 5; i++) {
//       // let number = genRandNumb(1, 100);

//       if(arrayNumIndovinati.includes(arrayNumTentati[i])){
//         document.querySelector('.numbers-box').innerHTML +=
//         `
//         ${numeroUtente.style.color="green"}      
        
//         `
//       }else{
//         document.querySelector('.numbers-box').innerHTML +=
//         `
//         ${numeroUtente.style.color="red"}      
        
//         `
//       }
      
//     }

}
 



