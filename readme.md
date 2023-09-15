# 데이터시각화 2회차

md파일이란 **md=markdown** 문서를 이야기 한다

---
[이미지 설명]![Alt text](image.png)

- 리스트는 이렇게 작성합니다
- 두번째 리스트
    - 중첩된 리스트는 이렇게 작성합ㄴ디ㅏ

1. 순번있는 리스트는 이렇게 작성합니다
2. 순번이 이렇게 들어갑니다 
---
.red라는 클래스를 사용하려면 바탕화면이 붉은색이 됩니다

```html
<p class="red">배경이 붉은색이 됩니다
```
```css
    background-color: red;
```
---
absolute position을 이용해서 중앙을 정렬하는 방법
```css
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
```