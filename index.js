let dropdown = document.querySelectorAll(".dropd");
let menu = document.querySelectorAll(".menu");

dropdown.forEach((e) => {
  e.addEventListener("click", () => {
    menu.forEach(function (e) {
      e.classList.toggle("active");
    });
  });
});

let dropSd = document.querySelectorAll(".dropSd");
let menusec = document.querySelectorAll(".menusec");

dropSd.forEach((e) => {
  e.addEventListener("click", () => {
    menusec.forEach(function (e) {
      e.classList.toggle("activesecond");
    });
  });
});
