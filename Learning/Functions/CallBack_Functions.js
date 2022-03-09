// CallBack functions are those, who are called by the other function or event and returns something to us.
// Such as an event listener


// Let's say we go to https://en.wikipedia.org/wiki/JavaScript, there you open a developer console
// and you can see that "JavaScript" is hooked as "$0"

$0.addEventListener("click", function(event) {
  console.log(event);
});

// That function "event" is CALLED BACK FUNCTION by the object when you click by mouse on "JavaScript" text aka "$0"
// and the event listener will catch this click. 
