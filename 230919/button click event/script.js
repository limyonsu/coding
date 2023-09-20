//const 이용해서 title이란 변수에 h1#title 요소를 담아주세요

const title = document.getElementById(`title`)
console.log = (title)

// 제목을 클릭했을때, alert 장에 '클릭'이라는 문구가 출력
//addeventlistener(이벤트 이름, 실행할 함수)
title.addEventListener(`click`, () => {
    alert(`클릭`)
})