const hamburguer = document.querySelector('.hamburguer');
const menuHome = document.querySelector('.menu-home');
const menuAbout = document.querySelector('.menu-about');
const menuProjects = document.querySelector('.menu-projects');
const menuContact = document.querySelector('.menu-contact');
const nav = document.querySelector('.nav');
const hiddenDivs = document.querySelectorAll('.hidden');

hamburguer.addEventListener('click', () => nav.classList.toggle('active'));
menuHome.addEventListener('click', () => nav.classList.toggle('active'));
menuAbout.addEventListener('click', () => nav.classList.toggle('active'));
menuProjects.addEventListener('click', () => nav.classList.toggle('active'));
menuContact.addEventListener('click', () => nav.classList.toggle('active'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
});

hiddenDivs.forEach((hiddenDiv) => observer.observe(hiddenDiv));