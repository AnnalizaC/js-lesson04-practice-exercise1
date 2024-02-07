//Change footer background color to #d7ddf3
var footer = document.querySelector(".contact");
footer.style.backgroundColor = "#d7ddf3";
//console.log(footer.outerHTML);

//Edit h2 tagline with whatever I want
var tagline = document.querySelector(".tagline");
tagline.innerText = "Come and smell the roses!";
// console.log(tagline.outerHTML);

//change address line height and font size
var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
//console.log(address.outerHTML);

//Emphasize the word everyday in contact section
var everyDay = document.querySelector("h3");
everyDay.innerHTML = "We're here for you <em>every day</em> of the week.";
//console.log(everyday.outerHTML);
