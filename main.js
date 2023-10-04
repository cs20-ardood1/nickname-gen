// Nickname Generator Assignment

// Button Event Listeners
document.getElementById("all-nicknames").addEventListener("click", allNicknames);
document.getElementById("rand-nickname").addEventListener("click", randomNickname);

function allNicknames() {
  // Get user's first and last name
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;

  // Output element
  let outputEl = document.getElementById("output");

  let output = "";
  for (let i = 0; i < names.length; i++) {
    output = output + `${i}: ${firstName} "${names[i]}" ${lastName}<br>`;
  }

  outputEl.innerHTML = output;
}

function randomNickname() {
  // Get user's first and last name
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;

  // Output element
  let outputEl = document.getElementById("output");

  // Get random index from array "names"
  let randomIndex = Math.floor(Math.random() * names.length);

  // Assign "randname" a random index from "randomIndex" 
  let randName = names[randomIndex];


  outputEl.innerHTML = `${firstName} "${randName}" ${lastName}<br>`;
}

// Nicknames Array
let names = [
  "Crusher",
  "the Scientist",
  "Twinkle-toes",
  "the Coder",
  "the Jester",
  "the Sloth",
  "Quick-Silver",
];
