const navigation = document.getElementById("navigation");
const body = document.body;
const backToTopButton = document.getElementById("backToTopButton");
const home = document.getElementById("home");
const services = document.getElementById("services");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

window.addEventListener('scroll', onScroll);
onScroll();

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a sessão passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //verificar se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da sessão
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`);

  menuElement.classList.remove('active');
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function onScroll() {
  showNavOnScroll()
  showBackToTopButton()
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function showNavOnScroll() {
  if(scrollY > 0){
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  } 
}

function showBackToTopButton() {
  if(scrollY > 800){
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  } 
}

function openMenu() {
  body.classList.add("menu-expanded");
}

function closeMenu() {
  body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000
}).reveal(`
  #home,
  .img-header,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about img,
  #contact,
  #contact header,
  #contact .content,
  #contact img,
  footer
`);