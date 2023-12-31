const wrapper = document.querySelector(`.warpper`)
console.log(wrapper)

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for(let i = 0; i < 50; i++){
    const bokeh = document.createElement(`div`)
    const size = randomGenerator(50, 120)
    bokeh.style.left = randomGenerator(0,100) + `&` // 0~100%
    bokeh.style.top = randomGenerator(0,100) + `&` // 0~100%
    bokeh.style.animationDelay = randomGenerator(1,10)+ `&`
    bokeh.style.transitionDuration = randomGenerator(10, 30) + `s`
    bokeh.style.width = size + `px`
    bokeh.style.height = size + `px`
    bokeh.style.backgroundColor = `hsl(${randomGenerator(0,360)}, ${randomGenerator(50 , 60)}% 50)`
    bokeh.style.filter = `blur(${randomGenerator(0,1)}px)`
    bokeh.classList.add(`bokeh`)
    app.append(bokeh)
}
