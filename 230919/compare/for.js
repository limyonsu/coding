// for.js
// for 문
console.log('for문 연습')

// for(let i = 0; i < 10; i++){
//     console.log(i)
//     for(let j  = 0; j < 10; j++){
//         console.log('j번째 :%{j}')
//     }
// }

const pokemon = ['피카츄','파이리','라이츄','이브이','메타몽','꺼부기','래기','안녕']

for(let i = 0; i < pokemon.length; i++){
    console.log(pokemon[i])
}


// const gogodan = ['9*1','9*2','9*3','9*4','9*5','9*6','9*7','9*8']

// for(let i = 0; i < gogodan.length; i++){
//     console.log(gogodan[i])
// }

// function multiply(x,y){
//     return  console.log ( x * y)
// }
// multiply(1,2)
// multiply(2,2)
// multiply(3,2)
// multiply(4,2)
// multiply(5,2)
// multiply(6,2)
// multiply(7,2)
// multiply(8,2)
// multiply(9,2)

for(let i = 1; i <= 9; i++){
    console.log(`${i}단`), 'background-color:red;'
    for(let j = 1; j <= 9; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
}
let star = '';
for(let i = 0; 1 < 5; i++){
    star = star + '';
    console.log(star)

}