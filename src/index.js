// Base URL for the API
const BASE_URL = "http://localhost:3000/characters";

// DOM Elements
const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");
const votesForm = document.getElementById("votes-form");
const votesInput = document.getElementById("votes");
const resetButton = document.getElementById("reset-btn");
const characterForm = document.getElementById("character-form");


// Track the currently selected character
let currentCharacter = null;


// Fetch all characters and populate the character bar
function fetchCharacters() {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((characters) => {
        characters.forEach((character) => {
          const span = document.createElement("span");
          span.textContent = character.name;
          span.addEventListener("click", () => displayCharacterDetails(character));
          characterBar.appendChild(span);
        });
      });
  }


  // Display character details in the detailed-info div
function displayCharacterDetails(character) {
    currentCharacter = character; // Set the current character
    detailedInfo.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Votes: <span id="vote-count">${character.votes}</span></p>
    `;
  }