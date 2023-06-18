const overlay = document.querySelector<HTMLDivElement>(".overlay");
const burger = document.querySelector<HTMLDivElement>(".burger");

burger?.addEventListener("click", () => {
  overlay?.classList.toggle("active");
});
