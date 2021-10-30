const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')
const menu = document.querySelectorAll('nav ul li a ')

for (element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

for (link of menu) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const arrowButton = document.querySelector('.back-to-top')
function showButtonToTopWhenScroll() {
  if (window.scrollY >= 360) {
    arrowButton.classList.add('show')
  } else {
    arrowButton.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll(),
    showButtonToTopWhenScroll(),
    activateAtCurrentSection()
})

// Swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// Scroll Reveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

// Travar o link ativo quando selecionado na seção

const sections = document.querySelectorAll('section[id]')

function activateAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (let section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
