/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const getRowsDiv = document.querySelectorAll('.row > div');
const getRows = document.querySelectorAll('.row');
const getContainer = document.querySelectorAll('.container');
const getImages = document.querySelectorAll('.row > div > img');
const width = window.matchMedia('(max-width:769px)');

function check(e) {
  if (e.matches) {
    getContainer[2].classList.add('pb-4');
    getContainer[2].classList.remove('pb-5');
    getContainer[3].classList.remove('pb-5', 'pt-5');
    getRowsDiv[7].classList.add('d-none');
    getRowsDiv[8].classList.remove('p-5');
    getRowsDiv[9].classList.remove('p-5');
    getRowsDiv[20].classList.add('_2');
    getRowsDiv[26].classList.remove('d-flex', 'justify-content-end');
    getRows[1].classList.add('d-none');
    getRows[3].classList.add('flex-column-reverse', 'flex-md-row');
    getImages[3].classList.add('w-100');
  } else {
    getContainer[2].classList.add('pb-5');
    getContainer[2].classList.remove('pb-4');
    getContainer[3].classList.add('pb-5', 'pt-5');
    getRowsDiv[7].classList.remove('d-none');
    getRowsDiv[8].classList.add('p-5');
    getRowsDiv[9].classList.add('p-5');
    getRowsDiv[20].classList.remove('_2');
    getRowsDiv[26].classList.add('d-flex', 'justify-content-end');
    getRows[1].classList.remove('d-none');
    getRows[3].classList.remove('flex-column-reverse', 'flex-md-row');
    getImages[3].classList.remove('w-100');
  }
}
check(width);
width.addEventListener('change', check);

console.log(getContainer);

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  // dots: true,
  responsiveClass: true,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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

// for (let a = 1; a < getRows.length; a += 1) {
//   getRows[a].classList.add('_4');
// }
