// console.log(`running...`)
const button = document.getElementById(`genetaye`)
function randomNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

//로또 번호 담을 배열
let lottoNumber = [];


for(let i =0; lottoNumber.length < 6; i++){
    //random 변수에 난수 생성한 값 할당
    const random = randomNumber(1,45)
    const isEntry = lottoNumber.includes(random)
    console.log(randomNumber(1,45))
    lottoNumber.push(randomNumber(1,45))
    console.log(lottoNumber)
}

button.addEventListener(`click`, () => {
    for(let i =0 lottoNumber.length < 6; i++){
        const random = randomNumber(1,45)
        const isEntry = lottoNumber.lottoNumber.includes(random)
        !isEntry ? lottoNumber.push(random)
    }

    //오름차순 정렬
    lottoNumber = lottoNumber.sort()

    //로또번호를 요소에 추가하는 반복문
    for(let i = 0; i < lottoNumber.length; i++){
        setTimeout(() ={
            li[i].textContent = lottoNumber[i]
        }, 300 + i)
    }
    
})

//배열중에 어떤값이 존재하는지 유무에 따라 true,false lottoNumber,includes(어떤값)