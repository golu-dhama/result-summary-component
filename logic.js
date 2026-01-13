document.addEventListener("DOMContentLoaded", () => {

  /* ================= ELEMENTS ================= */

  const scoreElements = document.querySelectorAll(".subject .score");
  const totalScoreEl = document.querySelector(".total-score");
  const percentageEl = document.querySelector(".circle .number");
  const circleEl = document.querySelector(".circle");

  const overlay = document.querySelector(".name-overlay");
  const startBtn = document.getElementById("startBtn");
  const usernameInput = document.getElementById("username");

  const studentNameEl = document.querySelector(".student-name");
  const messageEl = document.querySelector(".result-message");
  const gradeEl = document.querySelector(".result-grade");

  let total = 0;

  /* ================= MARKS + TOTAL ================= */

  scoreElements.forEach(scoreEl => {
    const marks = Math.floor(Math.random() * (100 - 33 + 1)) + 33;
    scoreEl.textContent = `${marks} / 100`;
    total += marks;
  });

  totalScoreEl.textContent = total;

  /* ================= PERCENTAGE ================= */

  const percentage = Math.floor((total / 500) * 100);
  percentageEl.textContent = `${percentage}%`;

  /* ================= GRADE & MESSAGE ================= */

  let grade = "";
  let message = "";

  if (percentage >= 90) {
    grade = "A+";
    message = "Outstanding Performance 🌟";
  } else if (percentage >= 80) {
    grade = "A";
    message = "Excellent Work 🚀";
  } else if (percentage >= 70) {
    grade = "B";
    message = "Well Done 👍";
  } else if (percentage >= 60) {
    grade = "C";
    message = "Good Effort 🙂";
  } else {
    grade = "D";
    message = "Needs Improvement 💪";
  }

  messageEl.textContent = message;
  gradeEl.textContent = `Grade: ${grade}`;

  /* ================= CIRCLE COLOR ================= */

  if (percentage >= 80) {
    circleEl.style.borderColor = "#2ecc71";
    percentageEl.style.color = "#2ecc71";
  } else if (percentage >= 60) {
    circleEl.style.borderColor = "#f1c40f";
    percentageEl.style.color = "#f1c40f";
  } else {
    circleEl.style.borderColor = "#e74c3c";
    percentageEl.style.color = "#e74c3c";
  }

  /* ================= NAME VALIDATION ================= */

  startBtn.addEventListener("click", () => {
    const name = usernameInput.value.trim();

    if (name === "") {
      alert("Please enter your name");
      return;
    }

    if (name.length < 2 || name.length > 20) {
      alert("Name must be between 2 and 20 characters");
      return;
    }

    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
      alert("Name can contain only letters (A–Z)");
      return;
    }

    // Update UI
    studentNameEl.textContent = name;

    // Store for future use
    localStorage.setItem("username", name);

    // Hide overlay
    overlay.style.display = "none";
  });

});
