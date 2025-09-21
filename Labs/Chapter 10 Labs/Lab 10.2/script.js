function calcWordFrequencies() {
  let string = prompt();
  const words = string.split(" ");
  let finale = new Map();
  for (word in words) {
    let value = finale.get(words[word]);
    if (value != undefined) {
      finale.set(words[word], value + 1);
    }
    else {
      finale.set(words[word], 1);
    }
  }
  for (let [word, amount] of finale) {
    console.log(word + " " + amount);
  }
}
