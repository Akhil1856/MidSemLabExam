const selected = [];
const schedule = document.getElementById("schedule");
const credits = document.getElementById("credits");
const message = document.getElementById("message");

document.querySelectorAll(".course button").forEach((button) => {
  button.onclick = () => {
    const course = button.parentElement;
    selected.push({
      name: course.dataset.name,
      credit: Number(course.querySelector("span").textContent[0])
    });
    button.disabled = true;
    button.textContent = "Added";
    showSchedule();
  };
});

function showSchedule() {
  schedule.innerHTML = selected.map(course => `<li>${course.name}</li>`).join("");
  credits.textContent = selected.reduce((total, course) => total + course.credit, 0);
}

document.getElementById("search").oninput = (event) => {
  const text = event.target.value.toLowerCase();
  document.querySelectorAll(".course").forEach((course) => {
    course.style.display = course.dataset.name.toLowerCase().includes(text) ? "block" : "none";
  });
};

document.getElementById("register").onclick = () => {
  message.textContent = selected.length ? "Registration successful!" : "Select a course first.";
};