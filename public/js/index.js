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
    eventNameInput.value  = ''
    locationInput.value = ''
    eventDateInput.value = ''
    eventDetails.value = ''
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
});

const fetchEvents = () => {
  return fetch("/events")
    .then((result) => result.json())
    .then((data) => createEventCard(data));
};
