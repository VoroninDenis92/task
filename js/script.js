let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let body = document.querySelector("body");
let age = document.getElementById("age");
let man = document.getElementById("man");
let woman = document.getElementById("woman");
let menuBtn = document.querySelector('.menu-btn');
let nav = document.querySelector('.nav');
let menu = document.querySelector('.menu');
let condition = false;

menuBtn.addEventListener('click', function(){
    menu.classList.add("menu-active");
	nav.classList.add('active');
    body.classList.add("scroll-hidden");
})

btn.onclick = function() {
  modal.style.display = "flex";
  body.classList.add("scroll-hidden");
}

window.onclick = function(event) {
  if (event.target == modal || event.target == menu) {
    modal.style.display = "none";
    menu.classList.remove("menu-active");
	nav.classList.remove('active');
    body.classList.remove("scroll-hidden");
  }
}

man.onclick = function() {
    age.style.display = "block";
    condition = true;
}

woman.onclick = function() {
    age.style.display = "none";
    condition = false;
}

function ValidMail() {
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message_email').innerHTML = output;
    return valid;
}
 
function ValidPhone() {
    const re = /^((7|8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,15}$/;
    const myPhone = document.getElementById("phone").value;
    let valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message_phone').innerHTML = output;
    return valid;
} 


function ageVer() {
    if (condition) {
        let age = document.getElementById("age").value;
        if (age >= 18 && age <= 65) {
            output = 'Вы в хорошей форме';
            document.getElementById('message_age').innerHTML = output;
            return true;
        } else {
            output = 'Ваш возраст не подходит';
            document.getElementById('message_age').innerHTML = output;
            return false;
        }
    }
     
}


