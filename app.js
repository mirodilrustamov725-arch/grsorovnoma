const questions = [
  "So‘nggi 24–48 soatda tana haroratingiz ko‘tarildimi?",
  "Isitma qanchalik davom etdi?",
  "Bosh og‘rig‘i (intoksikatsiya belgisi) bormi?",
  "Burun bitishi yoki burundan ajralma bormi?",
  "Yo‘tal (quruq yoki balg‘amli) bormi?",
  "Umumiy holsizlik / mushak og‘rig‘i bormi?"
];

const answers = [
  "Yo‘q",
  "Yengil",
  "O‘rtacha",
  "Namoyon, sezilarli",
  "Kuchli",
  "Juda kuchli, hayotni cheklovchi"
];

// Savollarni chiqarish
const qDiv = document.getElementById("questions");
questions.forEach((q, i) => {
  let html = `<div class="card"><h3>${i+1}. ${q}</h3><div class="options">`;
  for (let v = 0; v <= 5; v++) {
    html += `<label><input type="radio" name="q${i}" value="${v}" ${v===0?"checked":""}> ${answers[v]}</label>`;
  }
  html += `</div></div>`;
  qDiv.innerHTML += html;
});

// Ro‘yxatdan o‘tish
function startSurvey() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (!name || !age || !gender) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  document.getElementById("register").classList.add("hidden");
  document.getElementById("survey").classList.remove("hidden");
}

// Hisoblash
function calculate() {
  let total = 0;

  for (let i = 0; i < 7; i++) {
    total += parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
  }

  const qol = document.querySelector('input[name="qol"]:checked').value;

  let risk = "";
  if (total <= 7) risk = "Past ehtimol";
  else if (total <= 14) risk = "Yengil holat";
  else if (total <= 22) risk = "O‘rtacha holat";
  else if (total <= 29) risk = "Yuqori ehtimol";
  else risk = "Og‘ir holat";

  document.getElementById("result").innerHTML = `
    📊 IPSS (balllar yig‘indisi): <b>${total}</b><br>
    🦠 Baholash: <b>${risk}</b><br><br>
    ❤️ Hayot sifati (QoL): <b>${qol} / 6</b>
  `;
}
