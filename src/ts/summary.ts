import "@/scss/summary.scss";
import "@/scss/index.scss";

const formSummary = document.querySelector<HTMLFormElement>(".form-summary")!;
const span = document.querySelector<HTMLSpanElement>(".file-upload__span")!;
const file = document.querySelector<HTMLInputElement>(".form-summary__summary")!;
const button = document.querySelector<HTMLButtonElement>(".form-summary__button")!;

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
