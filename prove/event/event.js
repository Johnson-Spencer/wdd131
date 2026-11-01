const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const eventDate = document.querySelector("#eventDate");

const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");

const messages = document.querySelector("#messages");
const ticketOutput = document.querySelector("#ticketOutput");


function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


eventDate.min = getToday();


typeSelect.addEventListener("change", function () {
  const selectedType = typeSelect.value;

  if (selectedType === "student") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "Enter your 9-digit student I#";
    extraInput.required = true;
  } else if (selectedType === "guest") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Access Code";
    extraInput.placeholder = "Enter EVENT131";
    extraInput.required = true;
  } else {
    extraField.classList.add("hidden");
    extraInput.required = false;
    extraInput.value = "";
  }
});


form.addEventListener("submit", function (event) {
  event.preventDefault();

  messages.innerHTML = "";
  ticketOutput.classList.add("hidden");

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const selectedType = typeSelect.value;
  const selectedDate = eventDate.value;
  const extraValue = extraInput.value.trim();

  const errors = [];

  if (firstName === "") {
    errors.push("Please enter your first name.");
  }

  if (lastName === "") {
    errors.push("Please enter your last name.");
  }

  if (email === "" || !email.includes("@")) {
    errors.push("Please enter a valid email address.");
  }

  if (selectedType === "") {
    errors.push("Please choose Student or Guest.");
  }

  if (selectedDate === "") {
    errors.push("Please choose an event date.");
  } else if (selectedDate < getToday()) {
    errors.push("Please choose a date later than today.");
  }

  if (selectedType === "student") {
    if (!/^\d{9}$/.test(extraValue)) {
      errors.push("Student I# must contain exactly 9 digits.");
    }
  }

  if (selectedType === "guest") {
    if (extraValue !== "EVENT131") {
      errors.push("The Access Code must be EVENT131.");
    }
  }

  if (errors.length > 0) {
    messages.innerHTML = `
      <p>Please fix the following errors:</p>
      <ul>
        ${errors.map(function (error) {
          return `<li>${error}</li>`;
        }).join("")}
      </ul>
    `;

    return;
  }

  const formattedDate = new Date(`${selectedDate}T00:00:00`)
    .toLocaleDateString();

  ticketOutput.innerHTML = `
    <h2>Ticket Created!</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p>
      <strong>Type:</strong>
      ${selectedType === "student" ? "Student" : "Guest"}
    </p>
    <p><strong>Event Date:</strong> ${formattedDate}</p>
  `;

  ticketOutput.classList.remove("hidden");

  form.reset();
  extraField.classList.add("hidden");
  extraInput.required = false;
  eventDate.min = getToday();
});