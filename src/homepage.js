export function homePage() {
  const content = document.querySelector("#content");
  const year = document.createElement("p");
  const heading = document.createElement("h1");
  const line = document.createElement("hr");
  const location = document.createElement("p");

  year.textContent = "1582";
  heading.textContent = "La Tour d'Argent";
  location.textContent = "Paris";

  heading.classList.add("resturant-name");

  content.appendChild(year);
  content.appendChild(heading);
  content.appendChild(line);
  content.appendChild(location);
}
