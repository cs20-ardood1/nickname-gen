// Nickname Generator Assignment

// Button Event Listener
document
  .getElementById("all-nicknames")
  .addEventListener("click", allNicknames);
document
  .getElementById("rand-nickname")
  .addEventListener("click", randomNickname);

function allNicknames() {
  // Get user's first and last name
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;

  // Get the output element
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

  // Get the output element
  let outputEl = document.getElementById("output");
  let randomIndex = Math.floor(Math.random() * names.length);
  let randName = names[randomIndex];

  // Display the random nickname in the output element
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
