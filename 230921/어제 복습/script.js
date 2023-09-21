// .menu-item이라는 클래스가 붙은 요소들은 모두 가져와야함
const menuItem = document.querySelectorAll(`.menu-item`)
console.log(menuItem)
//마지막 번째??
// console.log(menuItem[menuItem.length - 1])
// menuItem[4].addEventListener(`click` , () => {
//    item.addEventListener(`click`, () =>{
//     menuItem.forEach()
//    })
// })

for(let i = 0; i < menuItem.length; i++){
    //클릭했을때, 모든 요소에서 active 클래스 제거
    // console.log(i)
    console.log(menuItem[i])
    menuItem[i].classList.add(`active`)
    menuItem[i].addEventListener(`click`, () =>{
        for(let button = 0; button < menuItem.length; button++){
            menuItem[button].classList.remove(`active`)
        }
        menuItem[i].classList.add(`ative`)
    })
    
}


//변수의 스코프(scope)
// let 키워드로 선언된 변수의 scope는 블록단위이다.
menuItem[0].addEventListener(`click`, () =>{
    menuItem[0].classList.remove(`active`)
})