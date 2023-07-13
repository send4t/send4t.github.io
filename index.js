import random from 'random';

const poems = require('./example.json');
const poem = random.choice(poems);

const poemDiv = document.getElementById('poem');
poemDiv.innerHTML = poem;
