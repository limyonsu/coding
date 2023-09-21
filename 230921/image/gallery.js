const data = [
    {title:`진돗개`, URL: `img/1.jpg`},
    {title:`시츄`, URL: `img/2.jpg`},
    {title:`치와와`, URL: `img/3.webp`},
    {title:`사모예드`, URL: `img/4.webp`},
    {title:`웰시고기`, URL: `img/5.jpg`},
]
//1. list에 목록
const list = document.getElementById(`list`)
console.log(list)

for(let i = 0; i < data.length; i++){
    list.innerHTML += `<li class="button">${data[i].title}</li>`
}

const buttons = document.querySelectorAll(`.button`)
const lmage = document.getElementById(`image`)
// const title = 

for(let i = 0; i < buttons.length; i++){
    console.log(buttons[i])
    // i번째 버튼을 클릭하면, i번째 data의 url을 콘솔로 출력
    buttons[i].addEventListener(`click`,() => {
        console.log(data[i].url)
        image.src = data[i].url
        title.textContent = data[i].title
    })
}