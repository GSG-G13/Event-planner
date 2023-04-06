const eventNameInput = document.getElementById("event-name");
const locationInput = document.getElementById("location");
const eventDateInput = document.getElementById("event-date");
const eventDetails = document.getElementById("event-details");
const btnAddEvent = document.getElementById("add-event");
const cards = document.querySelector(".cards");

const createHtmlElement = (element, className, id) => {
  const ele = document.createElement(element);
  ele.className = className ? className : "";
  ele.id = id ? id : "";
  return ele;
};
const appendChildren = (parent, ...children) => {
  children.forEach((ele) => {
    parent.appendChild(ele);
  });
};

const createEventCard = (title, details, link) => {
  const card = createHtmlElement("div", "card");
  const cardImage = createHtmlElement("div", "card-image");
  const img = createHtmlElement("img");
  img.setAttribute("src", "../images/hero.png");
  cardImage.appendChild(img);
  const cardContent = createHtmlElement("div", "card-content");
  const h3EventTitle = createHtmlElement("h3");
  h3EventTitle.textContent = title;
  const pDes = createHtmlElement("p");
  pDes.textContent = details;
  const registerToEvent = createHtmlElement("a", "button");
  registerToEvent.textContent = "Register Now";
  registerToEvent.setAttribute("href", link);
  appendChildren(cardContent, h3EventTitle, pDes, registerToEvent);
  appendChildren(card, cardImage, cardContent);
  cards.append(card);
};

for (let i = 0; i < 5; i++) {
  createEventCard("test", "test", "https://www.google.com/");
}
