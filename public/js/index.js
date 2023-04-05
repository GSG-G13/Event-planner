btnAddEvent.addEventListener('click', () => {
    const requestOption = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "eventName": eventNameInput.value,
            "location": locationInput.value,
            "data": eventDateInput.value,
            "details": eventDetails.value
        })
    }
    fetch('/event',requestOption)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
})