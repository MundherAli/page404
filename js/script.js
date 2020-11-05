
let btn_dark = document.querySelector('.dark');
let btn_light = document.querySelector('.light');

let big_circle = document.getElementById('big_circle');
let small_circle = document.getElementById('small_circle');
let btn_home = document.querySelector('.btn_home');

let lang = document.querySelectorAll('.langs button');

let foot = document.querySelector('footer');


btn_dark.addEventListener('click', () => {

    document.body.classList.add('dark_mode')
    document.body.classList.add('white_color')

    big_circle.style.stroke = "#fff";
    small_circle.style.stroke = "#fff";

    btn_home.style.border = '1px solid #fff';
    btn_home.style.color = '#fff';

    btn_dark.style.border = '1px solid #fff';
    btn_dark.style.color = '#fff';

    btn_light.style.border = '1px solid #fff';
    btn_light.style.color = '#fff';

    for (let i = 0; i < lang.length; i++) {
        lang[i].style.border = '1px solid #fff';
        lang[i].style.color = '#fff';
    }


    foot.style.boxShadow = ' 0 10px 15px #fff';

});

btn_light.addEventListener('click', () => {
    document.body.classList.remove('dark_mode');
    document.body.classList.remove('white_color');

    big_circle.style.stroke = "#121212";
    small_circle.style.stroke = "#121212";

    btn_home.style.border = '1px solid #121212';
    btn_home.style.color = '#121212';

    btn_dark.style.border = '1px solid #121212';
    btn_dark.style.color = '#121212';

    btn_light.style.border = '1px solid #121212';
    btn_light.style.color = '#121212';

    for (let i = 0; i < lang.length; i++) {
        lang[i].style.border = '1px solid #121212';
        lang[i].style.color = '#121212';
    }

    foot.style.boxShadow = ' 0 10px 15px #121212';

});