// Inside the Chrome, Inspect the page, click on the element
// and select COPY > COPY JS Path , then you can use it your querySelector
// to target n-th child element
//
// Try this code in the console, it will change "Third" Li element value.

var myChange = document.querySelector("body > ul > li:nth-child(3)");
myChange.innerHTML = ("Wow, it really works folks!");
