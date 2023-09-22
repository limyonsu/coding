console.log(`app.js running...`)
const title = document.getElementById(`text`)
console.log(title.textContent)

// title.textContent 내용을 배열로 변환
// split(`기준이 되는 문자`)메소드 : 기준이 되는 문자를 기준으로 쪼개 배열로 변환, `` 그냥 따음표를 넣으면 글자단위로 쪼갠다.
const textArray = title.textContent.split(``)
console.log(textArray)

// title의 텍스트 내용을 비워준다
textArray.textContent = ``


// createElement(`태그이름`) : 태그를 생성하는 메소드
const p = document.createElement(`p`)
// 생성한 p 태그 안에 title 택스트 내용을 할당
p.textContent = title.textContent
// body의 맨마지막 부분에 생성한 p 태그 추가
document.body.append(p)

// 
for(let i =0; i < textArray.length; i++){
    setTimeout(() => {
        console.log(textArray[i])
        title.textContent += textArray[i]
    },500 * i)
}
