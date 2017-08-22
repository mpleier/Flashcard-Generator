function BasicCard(front, back) {
  this.front = front.toString();
  this.back = back.toString();
}
module.exports = BasicCard;

var CC = require('./ClozeCard.js');

var a = new CC("George Washington was the first president of the United States.", "George Washington");

console.log(a.partial +"\n"+ a.fullText);
