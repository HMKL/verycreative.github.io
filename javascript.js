/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const getRowsDiv = document.querySelectorAll('.row > div');
const getRows = document.querySelectorAll('.row');
const width = window.matchMedia('(max-width:769px)');

function check(e) {
  if (e.matches) {
    getRowsDiv[7].classList.add('d-none');
    getRowsDiv[8].classList.remove('p-5');
    getRowsDiv[9].classList.remove('p-5');
    getRows[1].classList.add('d-none');
    getRows[3].classList.add('flex-column-reverse', 'flex-md-row');
  } else {
    getRowsDiv[7].classList.remove('d-none');
    getRowsDiv[8].classList.add('p-5');
    getRowsDiv[9].classList.add('p-5');
    getRows[1].classList.remove('d-none');
    getRows[3].classList.remove('flex-column-reverse', 'flex-md-row');
  }
}
check(width);
width.addEventListener('change', check);

console.log(getRowsDiv);

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  // dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },

  },
});
