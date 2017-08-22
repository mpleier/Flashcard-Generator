// var BC = require('./BasicCard.js');
//
// var a = BC(123, 789);
//
// console.log(a.front +"\n"+ a.back);


function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
  return new ClozeCard(text, cloze);
}
  this.cloze = cloze.toString();
  this.fullText = text.toString();
  if (this.fullText.indexOf(this.cloze) === -1){console.log("Cloze not found in text");}
  this.partial = this.fullText.replace(this.cloze, "...");
}
module.exports = ClozeCard;
