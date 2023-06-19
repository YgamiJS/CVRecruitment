import "@/scss/vacancies.scss";
import "@/scss/index.scss";
import { IVacancie } from "./types";

const vacanciesList = document.querySelector<HTMLUListElement>(".vacancies-list")!;
const filterMenu = document.querySelector<HTMLElement>(".aside")!;
const filterButton = document.querySelector<HTMLButtonElement>(".filter")!;

filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("active");
});

async function fetchVacancies(url: string) {
  const response = await fetch(url);

  const result: IVacancie[] = await response.json();

  return result;
}

(async () => {
  const vacancies = await fetchVacancies("");

  vacanciesList.innerHTML = vacancies
    .map(
      (vacancie) =>
        `
        <li class="vacancies-list__vanacie">
          <h1 class="vacancies-list__h1">${vacancie.name}</h1>
          <p class="vacancies-list__p">Обязанности</p>
            <ul class="vacancies-list__responsibilities">
              ${vacancie.responsibilities
                .map(
                  (responsibilitie) =>
                    `
                    <li class="vacancies-list__responsibilitie">
                      <span class="vacancies-list__span">${responsibilitie}</span>
                    </li>
                    `
                )
                .join("")}
            </ul>
            <p class="vacancies-list__p">Требования</p>
            <ul class="vacancies-list__requirements">
              ${vacancie.requirements
                .map(
                  (requirement) =>
                    `
                    <li class="vacancies-list__responsibilitie">
                      <span class="vacancies-list__span">${requirement}</span>
                    </li>
                    `
                )
                .join("")}
            </ul>
          <a class="vacancies-list__link purpleButton" href="#">Связаться с работодателем</a>
      </li>
  `
    )
    .join("");
});
