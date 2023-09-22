setTimeout(() => {
console.log(`1번째`)
}, 1000)
setTimeout(() => {
    console.log(`2번째`)
}, 3000)
setTimeout(() => {
    console.log(`3번째`)
}, 500)

let index = 0;
// 1초뒤에 index값을 1로 변경해서 console로 출력

setInterval(() => {
    index++
    document.body.textContent = index
    console.log(index)
}, 1000)

setInterval(() =>{
    index++
    console.log(index)
    document.body.style.backgroundColor =` red`
}, 1000)


console.log(`1번째`)
console.log(`2번째`)
console.log(`3번째`)
