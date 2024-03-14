// music area

const playMusic = document.querySelectorAll('.music .item .playMusic')
const musicDetail = document.querySelector('.musicDetail')
const music_bg =document.querySelector('.bg')
console.log(musicDetail, music_bg, playMusic)

musicDetail.style.display = 'none'

for(let i=0; i<10; i++){
    playMusic[i].addEventListener('click',function(e){
        musicDetail.style.display = 'block'
        e.preventDefault()
    })
}

