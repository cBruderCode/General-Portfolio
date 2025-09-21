function parseScores(scoresString) {
   scoresArray = scoresString.split(" ");
   return scoresArray;
}

function buildDistributionArray(scoresArray) {
  gradeTot = [0, 0, 0, 0, 0];
   for (score in scoresArray) {
     if (scoresArray[score] >= 90) {
       gradeTot[0] = gradeTot[0] + 1;
     }
     if (scoresArray[score] < 90 && scoresArray[score] >= 80) {
       gradeTot[1] = gradeTot[1] + 1;
     }
     if (scoresArray[score] < 80 && scoresArray[score] >= 70) {
       gradeTot[2] = gradeTot[2] + 1;
     }
     if (scoresArray[score] < 70 && scoresArray[score] >= 60) {
       gradeTot[3] = gradeTot[3] + 1;
     }
     if (scoresArray[score] < 60) {
       gradeTot[4] = gradeTot[4] + 1;
     }
   }
   return gradeTot;
}

function setTableContent(userInput) {
  let rawGrades = parseScores(userInput);
  let pureGrades = buildDistributionArray(rawGrades);

  let bars = document.getElementById("firstRow");
  let gradeNums = document.getElementById("thirdRow");

  for (let grade in pureGrades) {
    let barSize = `<div style="height:${pureGrades[grade] * 10}px" class="bar${grade}"></div>`;
    let bar = document.createElement('td');
    bar.innerHTML = barSize + bar.innerHTML;
    bars.appendChild(bar);

    let gradeCount = document.createTextNode(`${pureGrades[grade]}`);
    let count = document.createElement('td');
    count.appendChild(gradeCount);
    gradeNums.appendChild(count);
  }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
