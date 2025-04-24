
import registeredUsers from './registeredUsers.json';

export const handleChange = (event, setValue, state) => {
    const ru = /[а-яёА-ЯЁ]+/i.test(event.target.value);
    if(ru) {
        event.target.value = event.target.value.replace(/[а-яёЯ-ЯЁ]/g, '');
        alert(`The use of cyrillic characters in the ${state} is not allowed`);
    } else {
        setValue(event.target.value);
    }
}

export const compareUserData = (userName, email, password) => {
    if (password.length < 8) {
        alert ('password length less than 8 characters');
    } else {
        registeredUsers.users.map((user) => {
            if (user.userName === userName &&
                user.email === email &&
                user.password === password) {
                    localStorage.setItem('logIn', userName);
                    window.location.assign('http://localhost:9000/');
            }
        });
    }
}
