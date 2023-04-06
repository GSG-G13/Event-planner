const authenticate =  (username, password) => {
    const realUsername = '123456';
    const realPassword = '123456';
    if(realUsername === username && realPassword === password){
        return true
    }else{
        return false
    }
}

signInBtn.addEventListener('click', ()  => {
    if(authenticate(userNameInput.value, passwordInput.value)){
        signInBtn.href="./html/admin.html"
    }else{
        toast.style.visibility = 'visible'
        toast.classList.add('show')
        setTimeout(() => {     
            toast.classList.remove('show')       
        },2000)
    }
})

