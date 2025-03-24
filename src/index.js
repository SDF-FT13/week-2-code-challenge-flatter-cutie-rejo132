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


