export function aboutPage() {
  const content = document.querySelector("#content");
  const aboutTextOne = document.createElement("p");
  const abouTextTwo = document.createElement("p");
  const venueContainer = document.createElement("p");

  aboutTextOne.textContent =
    "Immerse yourself in the discovery of this four-hundred-year-old household! Our rich heritage has given birth to today's vibrant and resolutely contemporary history...";

  abouTextTwo.textContent =
    "Four exceptional venues designed to entertain and enchant you any time, day and night.";

  aboutTextOne.classList.add("about-text");
  aboutTextOne.classList.add("about-text-one");
  abouTextTwo.classList.add("about-text");
  abouTextTwo.classList.add("about-text-two");
  venueContainer.classList.add("venue__container");

  // Venue Items
  const venueContainerOne = document.createElement("div");
  const venueTextOneThe = document.createElement("p");
  const venueTextOne = document.createElement("p");
  venueTextOneThe.textContent = "THE";
  venueTextOne.textContent = "RESTURANT";
  venueTextOneThe.classList.add("venue__text");
  venueTextOne.classList.add("venue__text");
  venueContainerOne.classList.add("venue__card");
  venueContainerOne.appendChild(venueTextOneThe);
  venueContainerOne.appendChild(venueTextOne);

  const venueContainerTwo = document.createElement("div");
  const venueTextTwoThe = document.createElement("p");
  const venueTextTwo = document.createElement("p");
  venueTextTwoThe.textContent = "THE";
  venueTextTwo.textContent = "BAR";
  venueTextTwoThe.classList.add("venue__text");
  venueTextTwo.classList.add("venue__text");
  venueContainerTwo.classList.add("venue__card");
  venueContainerTwo.appendChild(venueTextTwoThe);
  venueContainerTwo.appendChild(venueTextTwo);

  const venueContainerThree = document.createElement("div");
  const venueTextThreeThe = document.createElement("p");
  const venueTextThree = document.createElement("p");
  venueTextThreeThe.textContent = "THE";
  venueTextThree.textContent = "ROOF";
  venueTextThreeThe.classList.add("venue__text");
  venueTextThree.classList.add("venue__text");
  venueContainerThree.classList.add("venue__card");
  venueContainerThree.appendChild(venueTextThreeThe);
  venueContainerThree.appendChild(venueTextThree);

  const venueContainerFour = document.createElement("div");
  const venueTextFourThe = document.createElement("p");
  const venueTextFour = document.createElement("p");
  venueTextFourThe.textContent = "THE";
  venueTextFour.textContent = "APARTMENT";
  venueTextFourThe.classList.add("venue__text");
  venueTextFour.classList.add("venue__text");
  venueContainerFour.classList.add("venue__card");
  venueContainerFour.appendChild(venueTextFourThe);
  venueContainerFour.appendChild(venueTextFour);

  // Adding Items
  content.appendChild(aboutTextOne);
  content.appendChild(abouTextTwo);
  content.appendChild(venueContainer);
  venueContainer.appendChild(venueContainerOne);
  venueContainer.appendChild(venueContainerTwo);
  venueContainer.appendChild(venueContainerThree);
  venueContainer.appendChild(venueContainerFour);
}
