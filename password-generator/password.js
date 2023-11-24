const alertContainer = document.querySelector('.alertContainer');
const passwordBtn = document.querySelector('.passwordBtn');
const faCopy = document.querySelector('.fa-copy');
const input = document.querySelector('input');

passwordBtn.addEventListener('click', createPassword);
faCopy.addEventListener('click', copyPassword);


function createPassword() {
    const passwordLength = 14;
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';

    for(let i = 0; i < passwordLength; i++)
    {
        const randomNum = Math.floor(Math.random()*characters.length);
        password += characters[randomNum];
    };

    input.value = password;
};

function copyPassword() {

    if(input.value)
    {
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.classList.remove('active');
        setTimeout(() => {
            alertContainer.classList.add('active');
        }, 2000);
    }
};