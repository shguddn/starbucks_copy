'use strict'

const badgeEl=document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle( function () {
  if(window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0, //투명도 설정
      display: 'none'
    })
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    //배지 보이지
    gsap.to(badgeEl, .6, {
      opacity: 1, //투명도 설정
      display: 'block'
    })
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300)) //설정한 시간당 한 번만 콘솔 로그를 출력하는 방법, 외부 라이브러리 사용
//_.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, { //시간차로 이미지가 뜰 수 있도록 //수동 행위를 최소화 자동화 진행
    delay: (index + 1) * .7, //0.7 1.4 2.1 2.7
    opacity: 1
  })
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true //  반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000
  },
  loop:true,
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가눙데에 보기
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소를 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
})

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop:true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide') //클래스 생성 //css 에서 처리
  }else {
    //보임처리
    promotionEl.classList.remove('hide')
  }
})



/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
      selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      {
        delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
        y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
        repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
        yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
        ease: Power1.easeInOut // Easing 함수 적용.
      }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 //뷰포트의 지점에서 판단하는 것
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller())
})








