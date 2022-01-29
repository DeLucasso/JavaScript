// Inside the Chrome, Inspect the page, click on the element
// and select COPY > COPY JS Path , then you can use it your querySelector
// to target n-th child element
//
// Try this code in the console, it will change "Third" Li element value.

var myChange = document.querySelector("body > ul > li:nth-child(3)");
myChange.innerHTML = ("Wow, it really works folks!");


// You can also use querySelectorAll and get an array of all "li" elements,
// then you can target it with [n-th] index in array.

document.querySelectorAll("li")[2];

// You can store it to a variable and work with it.

var myVariable = document.querySelectorAll("li")[2];
myVariable.style.color = ("green");

// Selecting the content between <H1> </H1> with
// innerHTML will return everything inbetween

document.querySelector("h1").innerHTML
// Output: '<strong>Hello</strong>'

// Selecting the content between <H1> </H1> with .textContent
document.querySelector("h1").textContent
// Output: 'Hello'

// Manipulate STYLE and ATTRIBUTES html to the <H1>Hello</H1> with .textContent
 document.querySelector("h1").innerHTML = "<em>Welcome</em>";
'<em>Welcome!</em>'