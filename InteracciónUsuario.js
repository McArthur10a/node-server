const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function realizarPregunta(pregunta, callback) {
  rl.question(pregunta, callback);
}

module.exports = {
  rl,
  realizarPregunta,
};
