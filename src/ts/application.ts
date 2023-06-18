import "@/scss/application.scss";
import "@/scss/index.scss";

const formSummary = document.querySelector<HTMLFormElement>(".form-application")!;
const span = document.querySelector<HTMLSpanElement>(".file-upload__span")!;
const file = document.querySelector<HTMLInputElement>(".form-application__application")!;
const button = document.querySelector<HTMLButtonElement>(".form-application__button")!;

formSummary.addEventListener("submit", async (event) => {
  event.preventDefault();

  let response = await fetch("/", {
    method: "POST",
    body: new FormData(formSummary),
  });

  response.ok ? (button.textContent = "Отправленно") : (button.textContent = "Отправить повторно");
});

file.addEventListener("change", () => {
  span.textContent = file.files && file.files[0].name;
});
