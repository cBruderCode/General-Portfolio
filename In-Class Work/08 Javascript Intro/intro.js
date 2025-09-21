/*
   This file illustrates a few areas of JavaScript:
   - very common items, like prompt() and console.log()
   - the typeof operator to determine the type of a variable
   - the NaN concept, which likely you did not seen in Java or Python
   - "weird" things with conditionals and comparison, like,
      - these have different meaning: = vs. == vs. ===
      - "truthy" and "falsy"
      - 2 > "12" does number conversion, but sorting does string conversion
   - many syntaxes and options for functions
   - many syntaxes and options for for loops (with arrays)

   In class, we'll also see how to use the console to interact
   with JavaScript code
*/


// DEMO 1 //////////////////////////////////////////////////////////////////////
// Simple string I/O, string-to-number conversion, NaN, typeof
function demo1() {
  let input = prompt("Input anything:")
  // try: 8, 8.8, 8.eight, eight.8, eight.eight

  console.log("You inputted *" + input + "*")

  let type = typeof input;
  console.log("...which has type " + type)

  let num = parseInt(input)
  console.log("Tried parsetInt, got " + num)

  type = typeof num;
  console.log("...which has type " + type)

  // In Java, parseInt throws an exception when the input is bad
  // In JavaScript, parseInt:
  // - returns as much of an int as it can find at the front of the string
  // - returns the special value NaN if it can't find an int at the front
}


// DEMO 2 //////////////////////////////////////////////////////////////////////
// Simple string I/O, confusion with = vs. == vs. ===
function demo2() {
  let input = prompt("Input anything:")
  // try 4, two, 2

  console.log("You inputted *" + input + "*")

  let type = typeof input;
  console.log("... which has type " + type)


  const key = 2
  if (input === key) {
    console.log("... which is identical to the key ===")
  } else {
    console.log("... which is NOT identical to the key ===")
  }

  if (input == key) {
    console.log("... which is equal to the key ==")
  } else {
    console.log("... which is NOT equal to the key ==")
  }

  if (input = key) {
    console.log("... avoid this mistake!  input is now " + input)
  } else {
    console.log("THIS MIGHT HAPPEN WON'T HAPPEN BUT PROBABLY WON'T")
  }

  // In JavaScript,
  //    =  can be used in a conditional, but shouldn't
  //   ==  means same value, ignoring type
  //  ===  means both same value AND same type
}


// DEMO 3 //////////////////////////////////////////////////////////////////////
// Truthy and Falsy
function demo3() {
  let input = prompt("Input anything:")
  // try just hitting enter, try just hitting cancel, try "null", try 0, try 8

  console.log("You inputted *" + input + "*")

  let type = typeof input;
  console.log("... which has type " + type)

  if (input) {
    console.log("... and is truthy")
  } else {
    console.log("... and is falsy")
  }

  input = parseInt(input)
  console.log("Now input is " + input)

  type = typeof input;
  console.log("... which has type " + type)

  if (input) {
    console.log("... and is truthy")
  } else {
    console.log("... and is falsy")
  }

  // Things that are falsy:
  // - the string "" (but the string " " is truthy)
  // - the object null (but the string "null" is truthy)
  // - the number 0 (but the string "0" is truthy)
  // - the number NaN (but the string "NaN" is truthy)
  // - special type/value undefined (but the string "undefined" is truthy)
  // Things that are truthy: anything that is not falsy
}


// DEMO F //////////////////////////////////////////////////////////////////////
// Functions: optional args, default param values, assign to variable, arrow =>
function demof(num, amt = 1) {
// no prompt(), so call demof() from the console.  try these calls:
// demof("four", "five")     demof("four", 5)     demof(4, 5)     demof(4)

  console.log("num is " + num)

  let type = typeof num;
  console.log("... which has type " + type)

  console.log("amt is " + amt)

  type = typeof amt;
  console.log("... which has type " + type)

  num += amt
  console.log("num is now " + num)

  let double = function(x) {
    return (x * 2)
  }

  let dub = double(num)
  console.log("dub is " + dub)

  let triple = x => x * 3
  // triple is exactly the same as double, except for multiplying by 3 instead

  let trip = triple(dub);
  console.log("trip is " + trip)

  // In JavaScript, functions:
  // - can be called with fewer arguments than specified
  // - can be defined with default parameter values (when no arg given)
  // - can be assigned to a variable, and subsequently called by that var
  // - can be written using a compact arrow notation
  // All of these ideas are covered in Ch. 8.5 Functions
  // Take some time to read, and reread, Ch. 8.5 Functions
}


// DEMO 5 //////////////////////////////////////////////////////////////////////
// Comparison and sorting: a tale of inconsistency
function demo5() {
  let print = function(ha, a, hb, b, hc, c) {
    console.log(ha + " " + a)
    console.log(hb + " " + b)
    console.log(hc + " " + c)
  }

  let strOne = "1"; let strTwo = "2"; let strTen = "10";
  let numOne = 1;   let numTwo = 2;   let numTen = 10;
  let numArr = [numOne, numTwo, numTen]
  let strArr = [strOne, strTwo, strTen]
  let mixArr = [numOne, numTwo, strTen]
  print("numArr:", numArr, "strArr:", strArr, "mixArr:", mixArr)

  console.log("\nSorting now...")

  numArr.sort()
  strArr.sort()
  mixArr.sort()
  print("numArr:", numArr, "strArr:", strArr, "mixArr:", mixArr)

  console.log("\nComparing now...")

  if (numOne < strTen) {
    console.log('numOne < strTen  so  1 < "10"')
  }
  if (numOne > strTen) {
    console.log('numOne > strTen  so  1 > "10"')
  }
  if (numTwo < strTen) {
    console.log('numTwo < strTen  so  2 < "10"')
  }
  if (numTwo > strTen) {
    console.log('numTwo > strTen  so  2 > "10"')
  }
  if (strTwo < strTen) {
    console.log('strTwo < strTen  so  "2" < "10"')
  }
  if (strTwo > strTen) {
    console.log('strTwo > strTen  so  "2" > "10"')
  }

  console.log("\nSorting with function now...")

  numArr.sort( (a, b) => a - b )
  strArr.sort( (a, b) => a - b )
  mixArr.sort( (a, b) => a - b )
  print("numArr:", numArr, "strArr:", strArr, "mixArr:", mixArr)

  // In JavaScript, there is somewhat of an inconsistency:
  // - default array sorting treats each element as a string
  // - when comparing string to number with <, the string is converted to num
  // You can provide a function to replace the default sorting behavior
  // These ideas are covered in Ch. 8.3 (Conditionals) and Ch. 8.7 (Arrays)
}

// DEMO 6 //////////////////////////////////////////////////////////////////////
// For Loops - including of vs. in
function demo6() {
  let names = ['Jay', 'Kay', 'Elle']
  console.log('names: ' + names)
  console.log('names: [' + names + ']')

  console.log('\nfor(init; cond; final) loop')
  for (let i = 0; i < names.length; i++) {
    console.log(i + ": " + names[i])
  }

  console.log('\nfor ... of loop')
  for (let x of names) {
    console.log(x)
  }

  console.log('\nfor ... in loop')
  for (let x in names) {
    console.log(x)
  }

  console.log('\n.forEach(function(item, index)) loop')
  names.forEach(function(item, index) {
    console.log(index + ": " + item)
  })

  console.log('\n.forEach() loop with arrow notation')
  names.forEach( (item, index) => console.log(index + ": " + item) )

  // In JavaScript:
  // - in for loops, be careful about terms: of (items) vs. in (indexes)
  // - arrays print out without brackets and without spaces between elements
}
