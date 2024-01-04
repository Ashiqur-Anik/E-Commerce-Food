const icon = document.getElementById('icon');
const navbar = document.getElementById('navbar');
const a = document.querySelectorAll('.a')

icon.addEventListener('click', () => {
    if (document.body.classList.contains('darkMode')) {
        lightMode()
    } else {
        darkMode()
    }
})
if (localStorage.getItem('darkMode') === 'enabled') {
    darkMode()
} else {
    lightMode()
}

function darkMode() {
    document.body.classList.add('darkMode');
    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('color')
    }
    navbar.classList.remove('bg-light');
    icon.style.color = 'white';
    icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    localStorage.setItem('darkMode', 'enabled')
}

function lightMode() {
    document.body.classList.remove('darkMode');
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('color')
    }
    icon.style.color = 'black';
    navbar.classList.add('bg-light')
    icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    localStorage.setItem('darkMode', 'disabled')
}

window.addEventListener('scroll', reveal);

function reveal() {
    const reveal = document.querySelectorAll('.reveal');

    for (let i = 0; i<reveal.length;i++){
        const windowHeight = window.innerHeight;
        const revealTop = reveal[i].getBoundingClientRect().top;

        if(revealTop<windowHeight){
            reveal[i].classList.add('active')
        }
        else{
            reveal[i].classList.remove('active')
        }
    }
}