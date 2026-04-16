const dueDateEl = document.getElementById("dueDate");
const timeRemainingEl = document.getElementById("timeRemaining");
const checkbox = document.getElementById("todoCheck");
const status = document.getElementById("todoStatus");
const title = document.getElementById("todoTitle");
const card = document.querySelector("[data-testid='test-todo-card']");

/* ---------- CONFIG (NOT SPECIFIED BY HNG) ---------- */
// 👉 YOU CAN CHANGE THIS
const DUE_DATE = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

/* ---------- FORMAT DATE ---------- */
function formatDate(date) {
  return `Due ${date.toDateString()}`;
}

/* ---------- TIME REMAINING ---------- */
function getTimeRemaining() {
  const now = new Date();
  const diff = DUE_DATE - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diff < 0) return `Overdue by ${Math.abs(hours)} hours`;
  if (minutes < 1) return "Due now!";
  if (hours < 24) return `Due in ${hours} hours`;
  if (days === 1) return "Due tomorrow";
  return `Due in ${days} days`;
}

/* ---------- INIT ---------- */
dueDateEl.textContent = formatDate(DUE_DATE);
timeRemainingEl.textContent = getTimeRemaining();

/* OPTIONAL UPDATE */
setInterval(() => {
  timeRemainingEl.textContent = getTimeRemaining();
}, 60000);

/* ---------- CHECKBOX ---------- */
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    status.textContent = "Done";
  } else {
    card.classList.remove("completed");
    status.textContent = "Pending";
  }
});

/* ---------- BUTTONS ---------- */
document.querySelector("[data-testid='test-todo-edit-button']")
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document.querySelector("[data-testid='test-todo-delete-button']")
  .addEventListener("click", () => {
    alert("Delete clicked");
  });
