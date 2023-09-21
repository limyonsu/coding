// console.log(`color`)

/**
 * .color: 색상이 반영되는 곳
 * .plus : 수치가 증가하는 버튼
 * .minus: 수치를 감소하는 버튼
 * hue : 반영된 수치가 나타나는 곳 (범위: 0 ~360)
 */

const color = document.querySelector(`color`)
const plus = document.querySelector(`.plus`)
const minus = document.querySelector(`.minus`)
const hue =document.querySelector(`.hue`)

// 콘솔로 출력  

let value = 0;
// 수치가 증가하는 버튼
// const changehue

plus.addEventListener(`click`, () => {
    if(value < 360) {
    value++
    console.log(value)
    hue.textContent = value;
    color.computedStyleMap.background = hsl($(value)
    50%, 50%)
}
});


// 수치가 감소하는 버튼s
minus.addEventListener(`click`, () => {
    if(value > 0){
    value--
    changehue(value)
    console.log(value)
}
})