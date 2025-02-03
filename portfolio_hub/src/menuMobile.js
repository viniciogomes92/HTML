const hamburguer = document.querySelector('.hamburguer');
const menuAbout = document.querySelector('.menu-about');
const menuProjects = document.querySelector('.menu-projects');
const menuContact = document.querySelector('.menu-contact');
const nav = document.querySelector('.nav');

hamburguer.addEventListener('click', () => nav.classList.toggle('active'));
menuAbout.addEventListener('click', () => nav.classList.toggle('active'));
menuProjects.addEventListener('click', () => nav.classList.toggle('active'));
menuContact.addEventListener('click', () => nav.classList.toggle('active'));