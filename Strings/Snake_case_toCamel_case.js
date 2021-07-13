//////// Snake Case to Camel Case ///////

/*
first_name to FirstName  
*/
function snakeToCamelCase(sentence) {
  let camelSentence = sentence
    .split("_")
    .map((word, index) => firstUppercase(word))
    .join("");

  return camelSentence;
}
function firstUppercase(word) {
  // return word && word.charAt(0).toUpperCase() + word.slice(1);

  return word.charAt(0).toUpperCase() + word.slice(1);
}
let snakeCaseString = "first_name";

console.log(snakeToCamelCase(snakeCaseString));
