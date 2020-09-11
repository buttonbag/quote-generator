const quote = document.querySelector(".quote");
const credit = document.querySelector(".credit");
const btn = document.querySelector("button");
const counterText = document.querySelector(".counter");

/* breaking bad api */
fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/100')
.then(res => res.json())
.then(data => {

	// console.log(data);
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
	
})
.catch(err => {
	console.log("Did not work.", err)
});