document.getElementById('login').addEventListener('click', loginAttempt)

function loginAttempt(){
    let user=document.getElementById('user').value
    let pass=document.getElementById('pass').value

    if(user=='abc' && pass=='def'){
        console.log('LOGIN correct')
        alert('Login successful!')
    } else {
        console.log('LOGIN false')
        alert('Username or password incorrect')
    }
}
