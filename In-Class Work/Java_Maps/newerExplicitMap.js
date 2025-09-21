// slogans from a possibly-not-reliable source:
// https://en.wikipedia.org/wiki/List_of_U.S._presidential_campaign_slogans
// "Tippecanoe and Tyler Too" by Harrison
// "54-40 or fight" by Polk
// "Who is James K. Polk?" by Clay


function newDemo() {

  // Given: create a new Map object
  let slogans = new Map()

  // Question: What do we do now to figure out how to use the object?

  // Action: Update slogans.  Candidates are keys.  Slogans are values.
  slogans.set("Harrison", "Tippecanoe and Tyler too");
  slogans.set("Polk", "54-40 or fight");
  slogans.set("Clay", "Who is James K. Polk?");
  // slogans.set("Coolidge", "");



  // Discussion - debugging a map object
  // - inline expressions
  // - printing (string + object) vs. printing object
  console.log('slogans has type ' + (typeof slogans))
  console.log('slogans is ' + slogans)
  console.log(slogans)

  // Question: How do we print out each key-value pair on a separate line?
  //           Desired output is shown on lines 3-5 at top of this file
  //           Quotation marks *should* be included in your output

  // Action: Do it

  for (let [name, slogan] of slogans) {
    console.log(`"${slogan}" by ${name}`);
  }

  // for (let candidate od slogans.keys()) {
  //   let quote = slogan.get(candidate);
  //   console.log(`"${quote}" by ${candidate}`)
  // }



  // Action: Prompt the user for a President's name, then
  //         show the matching slogan or notify no slogan was found

  let prezName = prompt("Give a President's name");
  let slogan = slogans.get(prezName);
  if (slogan != undefined) {
    console.log(slogan);
    document.writeln(slogan);
  }
  else {
    console.log("No slogan found");
  }



  // Peeking ahead: take these steps:
  // - copy and paste your console.log line (you now have 2 of them)
  // - in your copy, change console.log to document.writeln
  // - save code, refresh page, rerun newDemo()
  // - what happened?


  // Other possible actions/exercises:
  // - allow the adding of multiple slogans
  // - allow the removal of presidents
  // - search for slogans containing a specific word
}
