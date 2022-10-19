//Открытие/закрытие моб менюшки
const buttonOpen = document.querySelector('.header__button-menu');
const navHeaderDisplay =   document.querySelector('.nav-header');

const openMobileMenu = () =>{
  if (buttonOpen.classList.contains('header__button-menu-open')){
    navHeaderDisplay.style.display = 'block';
    buttonOpen.classList.remove('header__button-menu-open');
    buttonOpen.classList.add('header__button-menu-close');
  }
  else if (buttonOpen.classList.contains('header__button-menu-close')){
    navHeaderDisplay.style.display = 'none';
    buttonOpen.classList.add('header__button-menu-open');
    buttonOpen.classList.remove('header__button-menu-close');
  }


}

//подписка на событие изменения вьюпорта. Если ширина от планшетной, и выше, у навигации, задается свойство display:grid
window.addEventListener('resize', () =>{
  if (window.matchMedia("(min-width: 768px)").matches) {
    console.log('больше 768')
    navHeaderDisplay.style.display = 'grid';
  }
})


buttonOpen.addEventListener('click', openMobileMenu)

//Слайдер отзывов
const reviewsForward = document.querySelector('.reviews-forward')
const reviewsBack = document.querySelector('.reviews-back')
const firstReview = document.querySelector('.slider-reviews__card1')
const secondReview = document.querySelector('.slider-reviews__card2')
const thirdReview = document.querySelector('.slider-reviews__card3')

const nextSlide = () => {
if(!firstReview.classList.contains('visually-hidden')){
  firstReview.classList.add('visually-hidden')
  secondReview.classList.remove('visually-hidden')
  thirdReview.classList.add('visually-hidden')
}
else if (!secondReview.classList.contains('visually-hidden')){
  firstReview.classList.add('visually-hidden')
  secondReview.classList.add('visually-hidden')
  thirdReview.classList.remove('visually-hidden')
}
 else if (!thirdReview.classList.contains('visually-hidden')){
  console.log('есть')
  firstReview.classList.remove('visually-hidden')
  console.log(firstReview)
  secondReview.classList.add('visually-hidden')
  thirdReview.classList.add('visually-hidden')
}
}

const previousSlide = () => {
  if(!firstReview.classList.contains('visually-hidden')){
    firstReview.classList.add('visually-hidden')
    secondReview.classList.add('visually-hidden')
    thirdReview.classList.remove('visually-hidden')
  }
  else if (!secondReview.classList.contains('visually-hidden')){
    firstReview.classList.remove('visually-hidden')
    secondReview.classList.add('visually-hidden')
    thirdReview.classList.add('visually-hidden')
  }
   else if (!thirdReview.classList.contains('visually-hidden')){
    firstReview.classList.add('visually-hidden')
    secondReview.classList.remove('visually-hidden')
    thirdReview.classList.add('visually-hidden')
  }
  }

reviewsForward.addEventListener('click',nextSlide )
reviewsBack.addEventListener('click', previousSlide)
