function updateLabel(index, value) {
  document.getElementById("label-" + index).innerText = value;
}

function calculateScore() {
  const scores = [];
  for (let i = 0; i < 7; i++) {
    scores.push(parseInt(document.getElementById("label-" + i).innerText));
  }
  const total = scores.reduce((a, b) => a + b, 0);

  let message = "";
  if (total <= 7) message = "Kasallik ehtimoli past.";
  else if (total <= 14) message = "Yengil virusli infeksiya.";
  else if (total <= 22) message = "O‘rtacha gripp ehtimoli.";
  else if (total <= 29) message = "Yuqori gripp ehtimoli.";
  else message = "Og‘ir holat — shifokorga murojaat qiling!";

  document.getElementById("result").innerText =
    "Jami ball: " + total + "\n" + message;
}
