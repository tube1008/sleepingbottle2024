const faqWrap = document.querySelectorAll('.faqWrap')
const faqContainer = document.querySelectorAll('.faqContainer')
const title = document.querySelectorAll('.detail .title')
const rotate = document.querySelectorAll('.detail .title img')
const moreDetail = document.querySelectorAll('.moreDetail')
console.log(title, rotate, moreDetail, faqContainer, faqWrap)

let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

let not_contents = (name)=>{
    name.forEach((t,i)=>{
        t.style.display = 'none'
    })
}

not_contents(faqContainer)
not_contents(moreDetail)
faqContainer[0].style.display = 'block'
faqWrap[0].classList.add('active')

faqWrap.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        hide(faqWrap)
        t.classList.add('active')
        not_contents(faqContainer)
        faqContainer[i].style.display = 'block'
        e.preventDefault()
    })
})
let turn_result = true
title.forEach((t, i) => {
    t.addEventListener('click', () => {
        turn_result  = !turn_result
        console.log(turn_result)
        if(turn_result == false){
            rotate[i].style.transform = 'rotate(180deg)';
        }else{
            rotate[i].style.transform = 'rotate(360deg)';
        }
        moreDetail.forEach((content, index) => {
            if (i === index) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
