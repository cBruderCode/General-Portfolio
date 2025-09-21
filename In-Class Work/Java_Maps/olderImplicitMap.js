// slogans from a possibly-not-reliable source:
// https://en.wikipedia.org/wiki/List_of_U.S._presidential_campaign_slogans
// "Tippecanoe and Tyler Too" by Harrison
// "54-40 or fight" by Polk
// "Who is James K. Polk?" by Clay


function oldDemo() {

  // Given: create a new object
  let slogans = {
    Harrison: "Tippecanoe and Tyler too",
    Polk: "54-40 or fight",
    Clay: "Who is James K. Polk?"
  };

  // Discussion: Map evolved as built-in JavaScript feature
  //             Older code will use a different approach - generic object

  // Action: Update slogans.  Candidates are keys.  Slogans are values.

  // slogans.Harrison = "Tippecanoe and Tyler too";
  // slogans.Polk = "54-40 or fight";
  // slogans.Clay = "Who is James K. Polk?";


  // Discussion - debugging a generic object acting as a map
  // - inline expressions
  // - printing (string + object) vs. printing object
  console.log('slogans has type ' + (typeof slogans))
  console.log('slogans is ' + slogans)
  console.log(slogans)

  // Question: How do we print out each key-value pair on a separate line?
  //           Desired output is shown on lines 3-5 at top of this file
  //           Quotation marks *should* be included in your output

  // Action: Do it

  for (let [name, slogan] of Object.entries(slogans)) {
    console.log(`"${slogan}" by ${name}`);
  }



  // Action: Prompt the user for a President's name, then
  //         show the matching slogan or notify no slogan was found

  let prezName = prompt("Give a President's name");
  let slogan = slogans[prezName];
  if (slogan != undefined) {
    console.log(slogan);
  }
  else {
    console.log("Slogan not found");
  }



  // Peeking ahead: take these steps:
  // - copy and paste your console.log line (you now have 2 of them)
  // - in your copy, change console.log to document.writeln
  // - save code, refresh page, rerun oldDemo()
  // - what happened?


  // Other possible actions/exercises:
  // - allow the adding of multiple slogans
  // - allow the removal of presidents
  // - search for slogans containing a specific word
}
