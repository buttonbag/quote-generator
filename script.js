/* breaking bad api */
// let request = new XMLHttpRequest();
// request.open('GET', "https://breaking-bad-quotes.herokuapp.com/v1/quotes/", true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   let data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
		
// 		console.log(data[0].quote);
// 		quote.innerText = data[0].quote;	
// 		credit.innerText = data[0].author;
			
//   } else {
//     console.log("Gah, it's not working!");
//   }
// }

// request.send();


const quote = document.querySelector(".quote");
const credit = document.querySelector(".credit");
const btn = document.querySelector("button");
const counterText = document.querySelector(".counter");

let quotesContents = [
	{
		"quote":
			"If you don’t build your dream, someone else will hire you to help them build theirs.",
		"credit": "Dhirubhai Ambani"
	},
	{
		"quote":
			"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
		"credit": "Mark Caine"
	},
	{
		"quote":
			"People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
		"credit": "Tony Robbins"
	},
	{
		"quote":
			"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
		"credit": "Audre Lorde"
	},
	{
		"quote":
			"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
		"credit": "Mark Twain"
	},
	{
		"quote":
			"Great minds discuss ideas; average minds discuss events; small minds discuss people.",
		"credit": "Eleanor Roosevelt"
	},
	{
		"quote": "I have not failed. I’ve just found 10,000 ways that won’t work.",
		"credit": "Thomas A. Edison"
	},
	{
		"quote":
			"If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it.",
		"credit": "Kim Garst"
	},
	{
		"quote":
			"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
		"credit": "David Brinkley"
	},
	{
		"quote":
			"Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
		"credit": "Steve Jobs"
	}
];

getQuote = () => {
	quote.classList.remove("show");
	setTimeout((fade) => {
		quote.classList.add("show");
	}, 1000);
	const quoteIndex = Math.floor(Math.random() * quotesContents.length);
	quote.innerText = quotesContents[quoteIndex].quote;
	credit.innerText = quotesContents[quoteIndex].credit;
	counterText.innerText = `${quoteIndex+1} of ${quotesContents.length}`; /* quote number tracker */
};

getQuote();

btn.addEventListener("click", getQuote);




