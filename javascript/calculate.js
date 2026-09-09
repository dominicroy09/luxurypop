const ceilingOptions = document.querySelectorAll('input[name="ceilingType"]');
const roomArea = document.getElementById("roomArea");
const areaValue = document.getElementById("areaValue");
const budget = document.getElementById("budget");

function calculateBudget() {
  const selectedOption = document.querySelector('input[name="ceilingType"]:checked').value;
  const [minRate, maxRate] = selectedOption.split("-").map(Number);
  const area = parseInt(roomArea.value);
  areaValue.textContent = area;

  const minTotal = minRate * area;
  const maxTotal = maxRate * area;

  budget.textContent = `₹${minTotal.toLocaleString()} – ₹${maxTotal.toLocaleString()}`;
}

ceilingOptions.forEach(option => option.addEventListener("change", calculateBudget));
roomArea.addEventListener("input", calculateBudget);

// Initial calculation
calculateBudget();
