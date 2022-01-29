// JavaScript training with LuCaS, (c) LuCaS 2022
// IG: @LukasNachtigall/ GitHub: github.com/DeLucasso
// YT: youtube.com/lukasnachtigall
// MIT License - Feel free to use and modify the code
//
// What does this code do?
// Add / Remove / Toggle class to element.

// We will get a list of classes of H1 by .classList
document.querySelector("h1").classList;
// There are none. Output:
// > DOMTokenList [value: '']

// this will ADD a class .huge to H1 element.
document.querySelector("h1").classList.add("huge");

// this will REMOVE a class .huge to H1 element.
document.querySelector("h1").classList.remove("huge");

// this will TOGGLE (add/remove) a class .huge to H1 element.
document.querySelector("h1").classList.toggle("huge");



// We will get a list of classes of H1 by .classList
document.querySelector("h1").classList;
// And here's the Output, after we added a class to H1 //
// > DOMTokenList ['huge', value: 'huge']
