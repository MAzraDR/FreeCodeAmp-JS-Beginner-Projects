const btn_decrease = document.getElementById('decrease')
const btn_reset = document.getElementById('reset')
const btn_increase = document.getElementById('increase')

const counterdisplay = document.getElementById('result')
let count = 0

btn_increase.addEventListener('click', function() {
    count++
    return counterdisplay.innerText = count
})

btn_decrease.addEventListener('click', function() {
    count--
    return counterdisplay.innerText = count
})

btn_reset.addEventListener('click', function() {
    count = 0
    return counterdisplay.innerText = count
})