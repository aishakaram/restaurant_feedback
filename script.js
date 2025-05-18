const form = document.getElementById("feedbackForm");
const display = document.getElementById("feedbackDisplay");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const food = document.getElementById("food").value;
  const employee = document.getElementById("employee").value;
  const place = document.getElementById("place").value;

  const feedback = `
    <div class="feedback-box">
      <p><strong>Food:</strong> ${food}</p>
      <p><strong>Employee:</strong> ${employee}</p>
      <p><strong>Place:</strong> ${place}</p>
    </div>
  `;

  display.innerHTML += feedback;
  form.reset();
});
