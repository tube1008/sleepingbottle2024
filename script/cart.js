const productDetail = document.querySelector ('.productDetail')
const closeBtn01 = document.querySelector('.closeBtn01')
console.log(productDetail, closeBtn01)

closeBtn01.addEventListener('click',()=>{
    productDetail.style.display = 'none'
})

