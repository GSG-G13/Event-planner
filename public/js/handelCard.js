document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form');
    const signInBtn = document.querySelector('.add-event')
    fetch("/events")
        .then((result) => result.json())
        .then((data) => {
            data.forEach((ele,index) => {
               const btn = createEventCard(ele,index);
               btn.addEventListener('click',() =>{
                form.classList.add('show')
               })
            })
        });

        signInBtn.addEventListener('click',() => {
            form.classList.remove('show')
        })

})



