class CardFlipOnScroll {
    constructor(wrapper, sticky) {
      this.wrapper = wrapper
      this.sticky = sticky
      this.cards = sticky.querySelectorAll('.card')
      this.length = this.cards.length
  
      this.start = 0
      this.end = 0
      this.step = 0
    }
  
    init() {
      this.start = this.wrapper.offsetTop - 100
      this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
      this.step = (this.end - this.start) / (this.length * 2)
    }
  
    animate() {
      this.cards.forEach((card, i) => {
        const s = this.start + this.step * i
        const e = s + this.step * (this.length + 1)
  
        if (scrollY <= s) {
          card.style.transform = `
                perspective(100vw)
                translateX(100vw) 
                rotateY(180deg)
              `
        } else if (scrollY > s && scrollY <= e - this.step) {
          card.style.transform = `
                perspective(100vw)
                translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
                rotateY(180deg)
              `
        } else if (scrollY > e - this.step && scrollY <= e) {
          card.style.transform = `
                perspective(100vw)
                translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
                rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
              `
        } else if (scrollY > e) {
          card.style.transform = `
                perspective(100vw)
                translateX(0vw) 
                rotateY(0deg)
              `
        }
      })
    }
  }
  
const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector('.sticky')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()
  
  window.addEventListener('scroll', () => {
    cardFlipOnScroll.animate()
  })
  
  window.addEventListener('resize', () => {
    cardFlipOnScroll.init()
  })

const sectionTags = document.querySelectorAll('section');
document.addEventListener("scroll", function(){

  sectionTags.forEach(section =>{
    let sectionTop = section.getBoundingClientRect().top;
    let sectionMid = sectionTop + section.getBoundingClientRect().height/2;
    let windowBottom = window.innerHeight*3/4;

    if(Math.abs(windowBottom-sectionMid)<40){
      section.classList.add('middle')
    }else{
      section.classList.remove('middle')
    }
  })
})

// const textTag = document.querySelector('.text-wrap');
// document.addEventListener("scroll", function(){
//   let textTop = text.getBoundingClientRect().top;
//   let textMid = textTop+text.getBoundingClientRect().height/2;
//   let windowMid = window.innerHeight/2;

//   if(Math.abs(windowMid-textMid)<100){
//     text.style.opacity = 1;
//   }else{
//     text.style.opacity = 0;
//   }
// })

const h1Tag = document.querySelector('h1');
const h2Tag = document.querySelector('h2');
const h3Tag = document.querySelector('h3');

const sub2Tag = document.querySelector('.sub2');
sub2Tag.style.transition = 'opacity 1s ease-out';

const sub3Tag = document.querySelector('.sub3');
sub3Tag.style.transition = 'opacity 1.5s ease-out';

const phoneImg = document.querySelector('.phone');

const contentText1 = document.querySelector('.sub-title');
const contentText2 = document.querySelector('.sub-title2');
const contentText3 = document.querySelector('.sub-title7');
const contentText4 = document.querySelector('.sub-title8');

const sub4Tag = document.querySelector('.sub4');
sub4Tag.style.transition = 'opacity 1s ease-out';

const sub5Tag = document.querySelector('.sub5');
sub5Tag.style.transition = 'opacity 1s ease-out';

const tossTag = document.querySelector('.toss');
const toss2Tag = document.querySelector('.toss2');

document.addEventListener("scroll", function(){
  let phoneImgTop = phoneImg.getBoundingClientRect().top;
  let phoneImgMid = phoneImgTop+phoneImg.getBoundingClientRect().height/2;
  let windowMid = window.innerHeight/2;

  let titleTop = titleTag.getBoundingClientRect().top;
  let titleMid = titleTop+titleTag.getBoundingClientRect().height/2;

  let subTop = subTag.getBoundingClientRect().top;
  let subMid = subTop+subTag.getBoundingClientRect().height/2;

  let sub2Top = sub2Tag.getBoundingClientRect().top;
  let sub2Mid = sub2Top+sub2Tag.getBoundingClientRect().height/2;

  let sub3Top = sub3Tag.getBoundingClientRect().top;
  let sub3Mid = sub3Top+sub2Tag.getBoundingClientRect().height/2;

  let contentText1Top = contentText1.getBoundingClientRect().top;
  let contentText1Mid = contentText1Top+contentText1.getBoundingClientRect().height/2;

  let contentText3Top = contentText3.getBoundingClientRect().top;
  let contentText3Mid = contentText3Top+contentText3.getBoundingClientRect().height/2;

  let tossTop = tossTag.getBoundingClientRect().top;
  let tossMid = tossTop+tossTag.getBoundingClientRect().height/2;

  let toss2Top = toss2Tag.getBoundingClientRect().top;
  let toss2Mid = toss2Top+toss2Tag.getBoundingClientRect().height/2;

  if (Math.abs(windowMid-tossMid)<200) {
    tossTag.style.transform = `translateY(-25px)`
  } else {
    tossTag.style.transform = `translateY(0px)`
  }

  if (Math.abs(windowMid-toss2Mid)<200) {
    toss2Tag.style.transform = `translateY(-25px)`
  } else {
    toss2Tag.style.transform = `translateY(0px)`
  }

  if (Math.abs(windowMid-phoneImgMid)<220) {
    phoneImg.src = `phone2.png`;
  } else {
    phoneImg.src = `phone1.png`;
  }

  if (Math.abs(windowMid-titleMid)<370) {
    titleTag.style.opacity = 1;
  } else {
    titleTag.style.opacity = 0;
  }

  if (Math.abs(windowMid-subMid)<370) {
    subTag.style.opacity = 1;
  } else {
    subTag.style.opacity = 0;
  }

  if (Math.abs(windowMid-sub2Mid)<370) {
    sub2Tag.style.opacity = 1;
  } else {
    sub2Tag.style.opacity = 0;
  }

  if (Math.abs(windowMid-sub3Mid)<370) {
    sub3Tag.style.opacity = 1;
  } else {
    sub3Tag.style.opacity = 0;
  }

  if (Math.abs(windowMid-contentText1Mid)<350) {
    contentText1.style.opacity = 1;
    contentText2.style.opacity = 1;
    sub4Tag.style.opacity = 1;
  } else {
    contentText1.style.opacity = 0;
    contentText2.style.opacity = 0;
    sub4Tag.style.opacity = 0;
  }

  if (Math.abs(windowMid-contentText3Mid)<350) {
    contentText3.style.opacity = 1;
    contentText4.style.opacity = 1;
    sub5Tag.style.opacity = 1;
  } else {
    contentText3.style.opacity = 0;
    contentText4.style.opacity = 0;
    sub5Tag.style.opacity = 0;
  }

  if(scrollY>=800){
    h1Tag.style.opacity = 1;
    h2Tag.style.opacity = 1;
  }else{
    h1Tag.style.opacity = 0;
    h2Tag.style.opacity = 0;
  }

  if(scrollY>=1800){
    h3Tag.style.opacity = 1;
  }else{
    h3Tag.style.opacity = 0;
  }
})

const titleTag = document.querySelector('.title');
titleTag.style.transition = 'opacity 0.8s ease-out';

const subTag = document.querySelector('.sub');
subTag.style.transition = 'opacity 0.8s ease-out';


// document.addEventListener("scroll",function(){
//   if(scrollY>=700){
//     h1Tag.style.transform = `translateX(0)`
//     h2Tag.style.transform = `translateX(0)`
//   }
// })
