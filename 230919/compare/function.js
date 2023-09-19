// function.js
// console.log('function')

//  add라는 이름은 함수
// x와 y라는 값을 받아서 더하는 함수
// x,y : 매개변수, parameter
function add(x,y){
    return console.log (x + y)
}

add(5,2)

function multiply(x,y){
    return  console.log ('곱셈결과는'+ x * y)
}
multiply(2,8)
// fat arrow functuon
const addfunc = (x, y) => {
    return console.log(x + y)
}
addfunc(10, 20)

// const showName = (name) => {
//     return console.log('제 이름은 ${name}입니다')
// }

const showName = name => console.log('제 이름은 (name)입니다 ')
showName('임윤수')