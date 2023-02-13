// console.log('kaj hocche')

document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const email=emailField.value;

    const passwordField= document.getElementById('user-password');
    const password=passwordField.value;
    
    if(email==='user@gmail.com' && password==='user'){
        window.location.href='bank.html'
    }
    else{
        alert('login invalid');
    }
})