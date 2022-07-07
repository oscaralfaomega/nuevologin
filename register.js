

let signup = function signup(params) {
    let firs_name = document.querySelector('#first_name_signup').value
    let last_name = document.querySelector('#last_name_signup').value
    let email = document.querySelector('#email_signup').value
    let password = document.querySelector('#password_signup').value

    selectedLogin()
}


let login = function login(params) {
    let email_resgistrado = document.querySelector('#email_signup').value
    let password_resgistrado = document.querySelector('#password_signup').value
    let email_login = document.querySelector('#email_login').value
    let password_login = document.querySelector('#password_login').value




   
    if (email_login == email_resgistrado) {
        console.log('El email es correcto')
        if (password_login == password_resgistrado) {
            console.log('La clave es correcta')
        } else {
            console.log('No es correcta la clave')
        }
    }else{
        console.log('El email es incorrectp')
       
    }


    
    if (email_login == email_resgistrado && password_login == password_resgistrado) {
        alert('Ingresaste, ¡bienvenido!')
    } else {
        alert('Intentá de nuevo')
    }

    
}
