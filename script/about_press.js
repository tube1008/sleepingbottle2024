const number = document.querySelectorAll ('.number')
const prev = document.querySelector ('.prev')
const next = document.querySelector ('.next')

console.log (number, prev, next)

let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

number[0].classList.add('active')


for(let i of number){
    i.addEventListener('click',()=>{
        hide(number)
        i.classList.add('active')
    })
}
