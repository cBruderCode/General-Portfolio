
window.addEventListener("DOMContentLoaded", function() {

  let button = document.getElementById('submit')
  button.addEventListener("click", wipe)
  button.addEventListener("click", grab)

  let button2 = document.getElementById('search')
  button2.addEventListener("click", search)

  let button3 = document.getElementById('hide')
  button3.addEventListener("click", hideText)

})

function grab() {
  let info = document.getElementById('courseinput').value
  const infov2 = info.split("\n")
  commaSeper(infov2)
}

function commaSeper(classData) {
  for (let course of classData) {
    course = course.split(",")
    classMaker(course)
  }
}

function classMaker(course) {
  let courseCode = course[0]
  let courseName = course[1]
  let courseTerm = course[2].replace(" ", "_")

  // let courseInfo = document.createTextNode(`${courseCode} - ${courseName}`)
  let courseInfo = document.createElement("span")
  courseInfo.innerHTML = `${courseCode} - ${courseName}`
  let courseStore = document.createElement("div")
  let mover = document.createElement("button")

  let moverPrompt = document.createTextNode("Move")
  mover.appendChild(moverPrompt)

  courseStore.appendChild(mover)

  let moverId = courseCode.replace(" ", "_")
  mover.id = `${moverId}` + "_btn"
  mover.classList.add('moveBtn')
  mover.addEventListener("click", function() {reveal(moverId)})

  if (courseCode == "" || courseName == "") {
    courseInfo.innerHTML = ""
    courseStore.removeChild(mover)
  }
  else {
    courseStore.classList.add(`${courseCode.substring(0, 3)}`)
    courseStore.classList.add("course")
    courseStore.id = `${moverId}`
  }

  let yank = document.getElementById("terms")
  courseStore.appendChild(courseInfo)

  allTerms = document.getElementsByClassName('term')

  if (isTermActive(courseTerm, allTerms)) {
    termStore = document.getElementById(`${courseTerm}`)
    termStore.appendChild(courseStore)
  }
  else {
    termStore = document.createElement("div")
    termStore.id = `${courseTerm}`
    termStore.classList.add('term')

    let termButton = document.createElement('button')
    termButton.classList.add("termBtn")
    let termButtonText = document.createTextNode("Here")
    termButton.appendChild(termButtonText)
    termButton.addEventListener("click", function() {move(courseTerm)})

    termHeader = document.createElement("div")
    termHeader.innerHTML = `${courseTerm.replace("_", " ")}`
    termHeader.classList.add(`${courseTerm.substring(0, courseTerm.length-5)}`)
    termHeader.classList.add('header')
    termHeader.appendChild(termButton)
    termStore.appendChild(termHeader)

    termStore.appendChild(courseStore)
    yank.appendChild(termStore)
  }

  for (let term of allTerms) {
    let termHolder = document.createElement("button")
    termHolder.innerHTML = `${term.id.replace("_", " ")}`
  }

}

function isTermActive(wantedTerm, allTerms) {
  for (let term of allTerms) {
    if (wantedTerm == term.id) {
      return true
    }
  }
  return false
}

function search() {
  let code = document.getElementById('coursesearch').value

  let removeCourse = document.getElementsByClassName('target')
  let arr = []
  for (let item of removeCourse) {
    arr.push(item)
  }
  for (let antiCourse of arr) {
    antiCourse.classList.remove('target')
  }

  wantedCourses = document.querySelectorAll(`div.${code} span`)
  console.log(wantedCourses)
  for (let course of wantedCourses) {
    course.classList.add('target')
  }

}

function hideText() {
  let button = document.getElementById('hide')
  let text = document.getElementById('courseinput')
  if (button.value == "Hide") {
    button.value = "Show"
    text.classList.add('hiddenText')
  }
  else {
    button.value = "Hide"
    text.classList.remove("hiddenText")
  }
}

function wipe() {
  let terms = document.getElementById('terms')
  terms.innerHTML = ''
}

function reveal(selector){
  let course = document.getElementById(selector)
  let buttonSel = selector + "_btn"
  course.classList.toggle("moveHigh")
  if (course.classList.contains("moveHigh")) {
    document.getElementById(`${buttonSel}`).textContent = "Cancel"
  }
  else {
    document.getElementById(`${buttonSel}`).textContent = "Move"
  }
  let mover = document.getElementsByClassName("termBtn")
  for (let term of mover) {
    term.classList.toggle("show")
  }
}

function move(wantedTerm){
  let selected = document.getElementsByClassName("moveHigh")
  let dest = document.getElementById(wantedTerm)
  for (let course of selected) {
    dest.appendChild(course)
  }
}

//P != NP
