// JavaScript training with LuCaS, www.instagram.com/lukasnachtigall/
// (c) LuCaS 2022. MIT License - Feel free to use and modify the code
//
// What does the code do?
// Creates an array <viplist> and assigned a list of names to it
// Asks for your name, then check with .includes() function if
// does exist in <viplist> and accordingly alert the user.

var viplist = ["Jana", "Tomas", "Milos", "Marek", "Dana", "Jan", "Lukas"];
var guest = prompt("What's your name?");
    if (viplist.includes(guest)) {
    alert("Welcome!!!");  
    } else {
    alert("You are not a VIP! Go home " + guest );
}
