

//const cadena1 = "hello world apple";
//const cadena2 = "hello world bananas";

const cadena1 = "apple apple";
const cadena2 = "bananas";

const stringSplit = cadena1.split(" ");
//console.log(stringSplit);

const stringSplit2 = cadena2.split(" ");
//console.log(stringSplit2);

let words = [];
let contStrings = 0,
  contWords = 0;
let lastWord = "";
/*for (let stringCadena of stringSplit) {
  console.log(stringCadena);
  if (lastWord == stringCadena) {
    ++contWords;
  }
  if (stringSplit2[contStrings] != stringCadena) {
    words.push(stringSplit2[contStrings]);
  }
  console.log(stringSplit2[contStrings]);

  lastWord = stringCadena;
  ++contStrings;
}*/

 /*stringSplit.find(function (cadenaEn){
    stringSplit.forEach((sentence, index) =>{
        if (cadenaEn!=sentence){
            words.push(cadenaEn)
        }
    }) 
})*/

const set2 = new Set([
    ...stringSplit,
    ...stringSplit2
])
console.log(set2)

set2.forEach((sentence) =>{
    console.log(sentence)
})


stringSplit.forEach((sentence) =>{
    console.log(sentence);
    console.log(cadena1.search(sentence))
    stringSplit2.find((cad2,i) =>{
        console.log(cad2,i,sentence)
        if(cad2 != sentence){
            if((words.length != 0) && !(cad2 in words)) 
            {
                words.push(cad2)
            }
            else{
                words.push(cad2)
            }
        }
    })
    
    //findWord, sentence)
})
console.log(words)

stringSplit.forEach((sentence, index) =>{
    console.log(sentence, index);
    let comp = stringSplit2.includes(sentence)
    console.log(comp)
    stringSplit2.find((cad2,i) =>{
        console.log(cad2,i,sentence)
        if(cad2 != sentence){
            if((words.length != 0) && !(cad2 in words)) 
            {
                words.push(cad2)
            }
            else{
                words.push(cad2)
            }
        }
    })
    
    //findWord, sentence)
})

console.log(words)
function findWord(string, sentence){

    console.log(string);
    if (words.length == 0){

    }else{

    }
}

console.log(words)

//stringSplit.forEach((sentence, index) =>{
//    const resultado =  stringSplit2.find(sentence.valueOf()===)
//})

for (let stringCadena of stringSplit) {
    console.log(stringCadena);
    if (lastWord == stringCadena) {
      ++contWords;
    }
    for (let stringCadena2 of stringSplit2){
    if (stringCadena2 != stringCadena) {
      words.push(stringCadena2);
    }
    }
    console.log(stringSplit2[contStrings]);
  
    lastWord = stringCadena;
    ++contStrings;
  }
console.log(words);
