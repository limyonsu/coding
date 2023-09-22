console.log(`running...`)
/**
 * #counter : 숫자가 변해야할 것
 * #start : 숫자가 증가하도록 작동하는 버튼
 * $stop : 숫자 증가를 멈추는 버튼
 */

const counter = document.getElementById(`counter`)
const startBtn = document.getElementById(`start`)
const stopBtn = document.getElementById(`stop`)
const resetBtn = document.getElementById(`reset`)


// console.log(counter)
// console.log(startBtn)
// console.log(stopBtn)
let index = 0;

startBtn.addEventListener(`click`, () => {
    //만약 timeId에 값이 들어있다면
    // if(timerId){
    //     // setInterval(timerId)
    //     clearInterval(timerId)
    // }

    // 비어잉ㅆ는 timerId에 selInterval 함수 할당
    timerId = setInterval(() => {
        // index 값 증가
        index++
        // 증가된 index값을 counter 내용으올 할당
        counter.textContent = index
        // console.log(index)
        
    }, 0.1);
    console.log(timerId)
})

stopBtn.addEventListener(`click`, () => {
    setInterval(timerId)
})

resetBtn.addEventListener(`click`, () =>{
    index = 0;
    counter.textContent = index
    clearInterval(timerId )
})