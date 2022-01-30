
// This will add a listener to the first button. Waits for a "click"
// and runs the handleClick function. Parentheses are omited to avoid
// executing the function onload.
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked -- W --!");
}

// This is the same thing, but we used Anonymous function inside the listener.
// The function doesn't have a name and the whole function is as the 2nd parameter of the .addEventListener
//
document.querySelector("button").addEventListener("click", function handleClick() {
  alert("I got clicked -- W --!");
});
