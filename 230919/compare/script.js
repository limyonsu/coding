// 두 값이 같은지, 다른지, 큰지, 작은지 판단
// let x = 1;
// console.log(x --1); // true;
// console.log(x != 1); // false. x와 1이 다르다
// console.log(x === 1);
// console.log(x!==1);
// // 자바스크립트는 등호 3개(===)를 기본으로 비교한다고 생각하는것이 좋다.

// console.log(1 == '1');
// console.log(1 === '1'); //false, 값의 타입까지 같은지 비교

// console.log(x > 1);
// console.log(x >= 1);
// console.log(x < 1 ); //false, x가 1보다 작다
// console.log(x <= 1); //true, x가 1보다 같거나 작다
// /** 
// *lf문(조건문)
// *조건이 들어오면 true, galse, 혹은 작은지 큰지 같은지 등을 판단해서 실행하는 문법*/

// let value = 10;

//value 가 10보다 크다면 실행
// if(value > 10){
//     console.log( $ (value)는 10보다 큽니다. )
// }
console.log('잘 모르겠습니다');
 else {
    console.log('숫자를 입력해 주세요')
}

if(typeof value === 'string'){
    console.log('문자형입니다')
} else {
    // else 거짓(false)일때 실행
        cpmsole.log('숫자형 입니다')
}

let money = 8000

if(money < 9000){
    console.log('짜장면을 먹슬수 있습니다.')
} else {
    console.log('짬뽕을 먹을 수 있습니다.')
}
// 3항 연산자
money < 9000 ? console.log('짜장면') : console.log('짬뽕')