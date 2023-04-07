const cards = document.querySelector(".cards");
const eventNameInput = document.getElementById("event-name");
const locationInput = document.getElementById("location");
const eventDateInput = document.getElementById("event-date");
const eventDetails = document.getElementById("event-details");
const btnAddEvent = document.getElementById("add-event");
const btnShowEvent = document.getElementById("show-events");
const userNameInput = document.getElementById("user-name");
const passwordInput = document.getElementById("password");
const signInBtn = document.getElementById("sign-in");
const toast = document.querySelector(".toast");

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

const createEventCard = ({ event_name, location, date, details },i) => {
  const card = createHtmlElement("div", "card");
  const cardImage = createHtmlElement("div", "card-image");
  const img = createHtmlElement("img");
  img.setAttribute("src", "../images/pngegg.png");
  cardImage.appendChild(img);
  const cardContent = createHtmlElement("div", "card-content");
  const h3EventTitle = createHtmlElement("h3");
  h3EventTitle.textContent = event_name;
  const titleDateContainer = createHtmlElement("div", "title-date");
  const eventDate = createHtmlElement("span", "event-date");
  eventDate.textContent = date
  // titleDateContainer.append(eventDate)
  titleDateContainer.append(h3EventTitle)
  cardContent.append(titleDateContainer)
  const pDes = createHtmlElement("p");
  const eventLocation = createHtmlElement("p");
  eventLocation.textContent = location;
  cardContent.append(eventLocation);
  pDes.textContent = details;
  titleDateContainer.append(h3EventTitle);
  titleDateContainer.append(date);
  const registerToEvent = createHtmlElement("a", "button",`${i}`);
  registerToEvent.textContent = "Register Now";
  appendChildren(cardContent, pDes, registerToEvent);
  appendChildren(card, cardImage, cardContent);
  cards.append(card);
  return registerToEvent;
};


