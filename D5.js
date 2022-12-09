/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
console.log('******ESERCIZIO 1*****')
/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets)
console.log('******ESERCIZIO 2*****')

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array 'pets'.
*/
let petsInOrder = pets.sort()
console.log(petsInOrder)
console.log('******ESERCIZIO 3*****')
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array 'pets', questa volta in ordine invertito.
*/
let reversePets = petsInOrder.reverse()
console.log(reversePets)



console.log('******ESERCIZIO 4*****')
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array 'pets' in ultima posizione.
*/
pets.push(pets.shift())

console.log(pets)



console.log('******ESERCIZIO 5*****')
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà 'licensePlate' con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let plateFord = {}
plateFord.licensePlate = 'CK1282'
Object.assign(cars[0], plateFord)

let platePeu = {}
platePeu.licensePlate = 'WA2322'
Object.assign(cars[1], platePeu)

let plateVolk = {}
plateVolk.licensePlate = 'LUL123'
Object.assign(cars[2], plateVolk)


console.log(cars)




console.log('******ESERCIZIO 6*****')
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array 'cars', rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà 'trims' da ogni auto.
*/

let myCar = {
  brand: 'nothing',
  model: 'nada',
  color: 'orangeSomeDay',
  trims: ['iLoveMyBicycle', 'walkSaveMywallet', 'iDontHaveGas'],
  licensePlate: '0V3R9000',
}
cars.push(myCar)
console.log(cars)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)




console.log('******ESERCIZIO 7*****')
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà 'trims' di ogni auto nel nuovo array 'justTrims', sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.shift())

}
console.log(justTrims)





console.log('******ESERCIZIO 8*****')
/* ESERCIZIO 8
    Cicla l'array 'cars' e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    'color' ha valore 'b', mostra in console 'Fizz'. Altrimenti, mostra in console 'Buzz'.
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b")
    console.log("Fizz")
  else {
    console.log("Buzz")

  }
}




console.log('******ESERCIZIO 9*****')
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i = 0
while (numericArray[i] !== 32) {
  console.log(numericArray[i])
  i++


}


console.log('******ESERCIZIO 10*****')
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const charactersPositions = []
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      console.log("ok its a")
      charactersPositions.push(1)
      break;
    case "b":
      console.log("ok its b")
      charactersPositions.push(2)

      break;
    case "c":
      console.log("ok its c")
      charactersPositions.push(3)

      break;
    case "d":
      console.log("ok its d")
      charactersPositions.push(4)

      break;
    case "e":
      console.log("ok its e")
      charactersPositions.push(5)

      break;
    case "f":
      console.log("ok its f")
      charactersPositions.push(6)

      break;
    case "g":
      console.log("ok its g")
      charactersPositions.push(7)

      break;
    case "h":
      console.log("ok its h")
      charactersPositions.push(8)

      break;
    case "i":
      console.log("ok its i")
      charactersPositions.push(9)

      break;
    case "l":
      console.log("ok its l")
      charactersPositions.push(10)

      break;
    case "m":
      console.log("ok its m")
      charactersPositions.push(11)

      break;
    case "n":
      console.log("ok its n")
      charactersPositions.push(12)

      break;
    case "o":
      console.log("ok its o")
      charactersPositions.push(13)

      break;
    case "p":
      console.log("ok its p")
      charactersPositions.push(14)

      break;
    case "q":
      console.log("ok its q")
      charactersPositions.push(15)

      break;
    case "r":
      console.log("ok its r")
      charactersPositions.push(16)

      break;
    case "s":
      console.log("ok its s")
      charactersPositions.push(17)

      break;
    case "t":
      console.log("ok its t")
      charactersPositions.push(18)

      break;
    case "u":
      console.log("ok its u")
      charactersPositions.push(19)

      break;
    case "v":
      console.log("ok its v")
      charactersPositions.push(20)

      break;
    case "z":
      console.log("ok its z")
      charactersPositions.push(21)

      break;

    default:
      console.log("nope")
      break;
  }
}

console.log(charactersPositions)