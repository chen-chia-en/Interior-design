var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  autoplay: true,
  Infinity:true,
  speed:0.5
});

// swiper2
var swiper2222 = new Swiper(".swiper-container2", {
    navigation: {
      nextE1: ".Swiper2 .swiper-button-next2",
      prevE1: ".Swiper2 .swiper-button-prev2",
    },
    loop:true
  });
// landing page
let shop1 = document.getElementById('shop1')
let shop2 = document.getElementById('shop2')
let shop3 = document.getElementById('shop3')

shop1.addEventListener('click',function(){

})

// slide2

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let swiperSlide2 = document.querySelectorAll('.swiper-slide2')
let slide_index = 0;

let showSlide = (index) =>{
  swiperSlide2.forEach((value)=>{
    value.classList.remove('active')
  })
  swiperSlide2[index].classList.add('active')
}

showSlide(slide_index);

prev.addEventListener('click', function(){
  slide_index = slide_index - 1

  if(slide_index < 0){
    slide_index = swiperSlide2.length - 1
  } 
  
  showSlide(slide_index)
})

next.addEventListener('click', function(){
  slide_index = slide_index + 1

  if(slide_index === swiperSlide2.length){
    slide_index = 0
  } 
  
  showSlide(slide_index)
})

// information image shopping
let shop = document.querySelectorAll('.shop')
let paper = document.querySelectorAll('.paper-wrapper')
let closepaper = document.querySelectorAll('.close')

shop.forEach((value,index) =>{
  value.addEventListener('click', function(){
    showtext(index)
  })
})

let showtext = (index) =>{
  paper.forEach(value => {
    value.style.opacity = "0"
    value.style.visibility = "hidden"
  })
  paper[index].style.opacity = "1"
  paper[index].style.zIndex = '1000'
  paper[index].style.visibility = 'visible'
}

closepaper.forEach((number,paper_index) =>{
  number.addEventListener('click', function(){
    closeEverything(paper_index)
  })
})

let closeEverything = (index)=>{
  paper[index].style.opacity = "0"
  paper[index].style.visibility = 'hidden'
}
