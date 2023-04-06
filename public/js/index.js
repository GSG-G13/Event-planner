const fetchEvents = () => {
  return fetch("/events")
    .then((result) => result.json())
    .then((data) => {
      data.forEach((element) => {
        createEventCard(element);
      });
    });
};
btnAddEvent.addEventListener("click", () => {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: eventNameInput.value,
      location: locationInput.value,
      data: eventDateInput.value,
      details: eventDetails.value,
    }),
  };
  fetch("/event", requestOption)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
btnShowEvent.addEventListener("click", fetchEvents);
