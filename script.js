const quote = document.querySelector(".quote");
const credit = document.querySelector(".credit");
const btn = document.querySelector("button");
const counterText = document.querySelector(".counter");

/* breaking bad api */
let request = new XMLHttpRequest();
request.open('GET', "https://breaking-bad-quotes.herokuapp.com/v1/quotes/100", true)
request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
		
		console.log(data);
		quote.innerText = data[0].quote;	
		credit.innerText = data[0].author;


getQuote = () => {
	quote.classList.remove("show");
	setTimeout((fade) => {
		quote.classList.add("show");
	}, 1000);
	const quoteIndex = Math.floor(Math.random() * data.length);
	quote.innerText = data[quoteIndex].quote;
	credit.innerText = data[quoteIndex].author;
	counterText.innerText = `${quoteIndex+1} of ${data.length}`; /* quote number tracker */
};


getQuote();

btn.addEventListener("click", getQuote);



} else {
    console.log("Gah, it's not working!");
  }
}

request.send();
