const nlp1 = require('compromise')
const nlp3 = require('compromise/three')

// -----------         change a sentence to past tense
let doc = nlp1('I can code in js') // replace with message.content
doc.verbs().toPastTense()
const res = doc.text()
message.channel.send(res); // I could code in js

// -----------         change a colloquial entence to formal
let doc = nlp1("we're not going to take it..") // replace with message.content
huh = doc.contractions().expand()
res = doc.text()
console.log(res) // we are not going to take it..

// -----------          add or subtract to the value
let doc = nlp1('ninety five thousand and fifty two') // replace with message.content
let doc1 = nlp1('420') // replace with message.content
doc.numbers().add(20) // to add
doc1.numbers().minus(20) // to minus
res = doc.text()
res1 = doc1.text()
message.channel.send(res) // ninety five thousand and seventy two
message.channel.send(res1) // 400

// -----------         changes a sentence containing singular word to plural
let doc = nlp1('I saw a man walking here') // replace with message.content
doc.nouns().toPlural() 
res = doc.text()
message.channel.send(res) // I saw men walking here

// -----------         changes a sentence to negative or positive
var doc = nlp1('i did not sleep here') // replace with message.content
var doc1 = nlp1('i slept here') // replace with message.content
doc.verbs().toPositive() // positive
doc1.verbs().toNegative() // negative
res = doc.text()
res1 = doc.text()
message.channel.send(res) // i did sleep here
message.channel.send(res1) // i did not sleep here

// -----------         analyzes currency symbol, price number and currency code. 
let doc = nlp3('$4.20CAD'); // replace with message.content
let analysis = doc.money().json();
const text = analysis[0].text; //  $4.20CAD
const prefix = analysis[0].number.prefix; // $
const num = analysis[0].number.num; // 4.20
const suffix = analysis[0].number.suffix;  // cad
const comma = analysis[0].number.hasComma; // false
const unit = analysis[0].number.unit;
message.channel.send("Analysis for:", text, "\n", "Prefix:", prefix, "\n", "Number:", num, "\n", "Suffix:", suffix, "\n", "Is comma present:", hasComma, "\n", "Unit:", unit, "\n");

/*
json structure:
[
  {
    text: '$4.20CAD',
    terms: [ [Object] ],
    number: {
      prefix: '$',
      num: 4.20,
      suffix: 'cad',
      hasComma: false,
      unit: ''
    }
  }
]*/


