/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const getRowsDiv = document.querySelectorAll('.row > div');
const getRows = document.querySelectorAll('.row');
const getContainer = document.querySelectorAll('.container');
const getImages = document.querySelectorAll('.row > div > img');
const getSupport = document.querySelectorAll('.support');
const width = window.matchMedia('(max-width:769px)');
// getRows.forEach((element) => {
//   element.classList.add('mx-auto');
// });
function check(e) {
  if (e.matches) {
    getContainer[2].classList.add('pb-4');
    getContainer[2].classList.remove('pb-5');
    getContainer[3].classList.remove('pb-5', 'pt-5');
    getContainer[5].classList.add('flex-column');
    getContainer[5].classList.remove('_4');
    getRowsDiv[7].classList.add('d-none');
    getRowsDiv[8].classList.remove('p-5');
    getRowsDiv[9].classList.remove('p-5');
    getRowsDiv[20].classList.add('_2');
    getRows[24].classList.add('text-center');
    getRowsDiv[26].classList.remove('d-flex', 'justify-content-end');
    getRows[1].classList.add('d-none');
    getRows[3].classList.add('flex-column-reverse', 'flex-md-row');
    getImages[3].classList.add('w-100');
    getSupport.forEach((element) => {
      element.classList.remove('support');
      element.classList.add('_5');
    });
  } else {
    getContainer[2].classList.add('pb-5');
    getContainer[2].classList.remove('pb-4');
    getContainer[3].classList.add('pb-5', 'pt-5');
    getContainer[5].classList.remove('flex-column');
    getContainer[5].classList.add('_4');
    getRowsDiv[7].classList.remove('d-none');
    getRowsDiv[8].classList.add('p-5');
    getRowsDiv[9].classList.add('p-5');
    getRowsDiv[20].classList.remove('_2');
    getRows[24].classList.remove('text-center');
    getRowsDiv[26].classList.add('d-flex', 'justify-content-end');
    getRows[1].classList.remove('d-none');
    getRows[3].classList.remove('flex-column-reverse', 'flex-md-row');
    getImages[3].classList.remove('w-100');
    getSupport.forEach((element) => {
      element.classList.remove('_5');
      element.classList.add('support');
    });
  }
}
check(width);
width.addEventListener('change', check);
console.log(getRowsDiv);

$(document).ready(() => {
  $('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    dots: true,
    responsiveClass: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    dots: true,
    responsiveClass: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      // 1000: {
      //   items: 3,
      // },
    },
  });
});
