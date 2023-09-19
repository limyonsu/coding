// app.js
// title이라는 아이디를 가진 요소를 변수에 담아서 콘솔로 출력해주세요 변수 이름은 :title

// const title = document.querySelector(`#title`)
// console.log(title)

const title = document.querySelectorAll(`.title`)
//h1태그를 출력
console.log(title[2])

for(let i = 0; i < title.length; i++){
    // 요소들의 텍스트 내용을 i번째 요소입니다 로 변경
    console.log(title[i])
}
for(let i = 0; i < title.length; i++){
    // 요소들의 텍스트 내용을 i번째 요소입니다 로 변경
    title[i].textContent = `${i}번쩨 요소입니다`
        // title[i].style.color = `red`;
        // title[i].style.fontsize = `$[(i+10) * 2]px`;
        // title[i].style.fontweight = `100`;
        title[i].classList.add(`red`)
        console.log(title.length)

        if(i=== title.length -1){
            title[i].classList.remove(`red`)
        }
    // title[i].textContent = `$(i)번쩨 요소입니다`;
}