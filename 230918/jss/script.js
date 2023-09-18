const username = document.getElementById('username')
console.log(username)
// let value = prompt(안녕하세요);
// console.log(value);
let value = prompt('이름을 입력해주세요')
username.textContent = value
let color = prompt('red')
username.style.color = color
let size = prompt('폰트사이즈를 입력하세요')
username.style.fontSize = size;