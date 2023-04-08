document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form');
    const signInBtn = document.getElementById('sign-in');
    const usernameInput = document.getElementById('user-name');
    const passwordInput = document.getElementById('password');
    const toast = document.querySelector('.toast');
    let eventId = null;
    fetch("/events")
        .then((result) => result.json())
        .then((data) => {
            data.forEach((ele,index) => {
               const btn = createEventCard(ele,index);
               btn.addEventListener('click',() =>{
                console.log(btn.id);
                eventId = btn.id
                form.classList.add('show')
               })
            })
            return 'eventId'
        })
        .then(() => {
            const cardsElements = document.querySelectorAll('.card-content');
            cardsElements.forEach((card) => {
                card.addEventListener('click',() => {
                        fetch('/getAttendee',{
                        method : 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            eventId: card.lastChild.id
                        })
                    })
                    .then((result) => result.json())
                    .then((result) => {
                        let ol = listOfNames(result['result'])
                        document.body.append(ol)
                    } )
                })
            })
        })

        signInBtn.addEventListener('click',() => {
            fetch('/login',{
                method : 'POST',
                headers: { "Content-Type": "application/json" },
                body : JSON.stringify({
                    username: usernameInput.value,
                    password: passwordInput.value,
                    eventId,
                })
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.id){
                    console.log(res)
                    form.classList.remove('show')
                    toast.classList.add("show");
                    toast.childNodes[0].textContent = 'The user has been add successfully'

                    setInterval(() => {
                        toast.classList.remove("show");
                    },3000)
                }else{
                    console.log(res)

                    form.classList.remove('show')
                    toast.classList.add("show");
                    toast.childNodes[0].textContent = 'The User Does Not exits'
                    setInterval(() => {
                        toast.classList.remove("show");
                    },3000)
                    console.log('HEllo')
                }
            })   
        })

})



