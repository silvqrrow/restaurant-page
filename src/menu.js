export function menuPage() {
  const content = document.querySelector("#content");
  const menu__container = document.createElement("div");
  const servicesTitle = document.createElement("h1");
  const line = document.createElement("hr");
  const location = document.createElement("p");

  menu__container.classList.add("menu__container");

  /* menu items */
  const itemOneContainer = document.createElement("div");
  const itemOneTitle = document.createElement("p");
  const itemOneDescription = document.createElement("p");
  itemOneTitle.textContent = "GOOSE FOIE GRAS DES TROIS EMPEREURS";
  itemOneDescription.textContent =
    "Truffle confit, Sauternes wine jelly, caramelized onion chutney";
  itemOneTitle.classList.add("item__title");
  itemOneDescription.classList.add("item__description");
  itemOneContainer.appendChild(itemOneTitle);
  itemOneContainer.appendChild(itemOneDescription);

  const itemTwoContainer = document.createElement("div");
  const itemTwoTitle = document.createElement("p");
  const itemTwoDescription = document.createElement("p");
  itemTwoTitle.textContent = "QUENELLE IN CHAMPAGNE ZABAGLIONE CREAM";
  itemTwoDescription.textContent =
    "Watercress with roasted hazelnut pesto sauce";
  itemTwoTitle.classList.add("item__title");
  itemTwoDescription.classList.add("item__description");
  itemTwoContainer.appendChild(itemTwoTitle);
  itemTwoContainer.appendChild(itemTwoDescription);

  const itemThreeContainer = document.createElement("div");
  const itemThreeTitle = document.createElement("p");
  const itemThreeDescription = document.createElement("p");
  itemThreeTitle.textContent = "SULLY SOLE FILLET";
  itemThreeDescription.textContent =
    "White wine sauce & emulsion of tomato zabaglione cream";
  itemThreeTitle.classList.add("item__title");
  itemThreeDescription.classList.add("item__description");
  itemThreeContainer.appendChild(itemThreeTitle);
  itemThreeContainer.appendChild(itemThreeDescription);

  const itemFourContainer = document.createElement("div");
  const itemFourTitle = document.createElement("p");
  const itemFourDescription = document.createElement("p");
  itemFourTitle.textContent = "ROYAL-STYLE DUCKLING";
  itemFourDescription.textContent = "Marmalade & roasted celeriac cream";
  itemFourTitle.classList.add("item__title");
  itemFourDescription.classList.add("item__description");
  itemFourContainer.appendChild(itemFourTitle);
  itemFourContainer.appendChild(itemFourDescription);

  const itemFiveContainer = document.createElement("div");
  const itemFiveTitle = document.createElement("p");
  const itemFiveDescription = document.createElement("p");
  itemFiveTitle.textContent = "EXOTIC ICED MERINGUE CAKE";
  itemFiveDescription.textContent =
    "Roasted coconut cream, passion fruit sorbet";
  itemFiveTitle.classList.add("item__title");
  itemFiveDescription.classList.add("item__description");
  itemFiveContainer.appendChild(itemFiveTitle);
  itemFiveContainer.appendChild(itemFiveDescription);

  servicesTitle.textContent = "CINQ SERVICES";

  content.appendChild(menu__container);
  menu__container.appendChild(servicesTitle);
  menu__container.appendChild(line);
  menu__container.appendChild(location);

  menu__container.appendChild(itemOneContainer);
  menu__container.appendChild(itemTwoContainer);
  menu__container.appendChild(itemThreeContainer);
  menu__container.appendChild(itemFourContainer);
  menu__container.appendChild(itemFiveContainer);
}
