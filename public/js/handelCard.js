document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello")
    fetch("/events")
        .then((result) => result.json())
        .then((data) => {
            data.forEach((ele) => {
                createEventCard(ele)
            })
        });
})
