window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let request = new XMLHttpRequest();
   request.addEventListener('load', responseReceivedHandler)
   request.open('GET', `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`)
   request.responseType = 'json'
   request.send()
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
  if (!(this.response.error)) {
  let html = '<ol>'
  for (let quote of this.response) {
    html += `<li>${quote.quote} - ${quote.source}</li>`
  }
  html += '</ol>'

  document.querySelector("#quotes").innerHTML = html;
  }
  else {
    console.log(this.response)
    document.querySelector("#quotes").innerHTML = this.response.error;
  }
}
