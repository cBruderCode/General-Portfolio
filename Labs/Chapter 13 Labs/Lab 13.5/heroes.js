window.addEventListener("DOMContentLoaded", function () {
  // add click event handler to heroes button
  let button = document.getElementById("heroes");
  let heroURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  button.addEventListener("click", function() {
  	fetchHeroes(heroURL);
  	});
});

// Fetch JSON heroes
function fetchHeroes(url) {
     // - make a new XMLHttpRequest
     // - add an event listener for the load event to call gotHeroes (defined below)
     // - open a "get" request from the heroURL (defined above)
     // - set the response type to be json
     // - send the request
     // TODO
     let request = new XMLHttpRequest()
     request.addEventListener('load', gotHeroes)
     request.open('GET', "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
     request.responseType = 'json'
     request.send()
}

// JSON Heroes data loaded event handler
function gotHeroes() {
   let json = this.response;
   console.log(json);

   // Fill in the header
   let header = document.getElementById("header");

   // create a new h1 element with the squadName from the json and append it to the header
   // TODO
   let teamName = json.squadName;
   let newName = document.createElement('h1')
   newName.innerHTML = teamName
   header.appendChild(newName)

   // create a new p element with the homeTown and date formed from the json
   // and append it to the header
   // TODO
   let homeTown = json.homeTown
   let dateFormed = json.formed
   let teamInfo = document.createElement('p')
   teamInfo.innerHTML = `Hometown: ${homeTown} // Formed: ${dateFormed}`
   header.appendChild(teamInfo)

   // Fill in the heroes
   let section = document.getElementById("section");
   let members = json.members;

   // loop through each member
   for (let i = 0; i < members.length; i++) {
       // create an article to hold info for the current hero
       let article = document.createElement("article");
       let h2 = document.createElement("h2");
       let p1 = document.createElement("p");
       let p2 = document.createElement("p");
       let p3 = document.createElement("p");
       let list = document.createElement("ul");

       // fill in the member's name, secret identity, and age
       // from the json data into the h2 and p elements
       // TODO
       let superName = members[i].name
       h2.innerHTML = superName
       let identity = members[i].secretIdentity
       p1.innerHTML = `Secret Identity: ${identity}`
       let age = members[i].age
       p2.innerHTML = `Age: ${age}`
       p3.innerHTML = `Superpowers:`


       // Loop through each super power
       // for each one, create an li element to hold the power
       // and append it to the list created above
       // TODO
       for (let power of members[i].powers) {
         let addedPower = document.createElement('li')
         addedPower.innerHTML = power
         list.appendChild(addedPower)
       }


       // append all the elements to the article for this hero,
       // then append the article to the section element
       // TODO
       article.appendChild(h2)
       article.appendChild(p1)
       article.appendChild(p2)
       article.appendChild(p3)
       article.appendChild(list)

       section.appendChild(article)


   }
}
