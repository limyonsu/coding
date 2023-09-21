/** 
 * #number: 변해야할 숫자
 * inc: 증가버튼
 * dec: 감소버튼
 * 
*/
const num = document.getElementById(`number`)
const inc = document.querySelector(`#inc`)
const dec = document.getElementById(`dec`)

// console.log(num)
// console.log(inc)
// console.log(dec)

let counter = 0;

// inc : increment(증가)하는 일

// inc.addEventListener('click',function(){})
inc.addEventListener(`click`, () => {
    // console.log(`증가`)
    // counter +=1;
    // 2. 증가연산자 
    if(counter < 100){
        counter+= 10;
        num.textContent = counter;
        bar.computedStyleMap.width = `${counter}%`
        console.log(counter);
        // inc.computedStyleMap.transform = `rotate(${counter}deg)`
    }
})



// dec : decrement(감소) 하는 일

dec.addEventListener(`click`, () => {
    // console.log(`증가`)
    // counter +=1;
    // 2. 증가연산자
    if(counter > 0){
        counter--;
        num.textContent = counter;
    }
    console.log(counter);
})

const bar = document.querySelector(`bar`)
console.log(bar)