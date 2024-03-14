// 일회성 광고창 
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.querySelector('.popUp');
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
// const body_a = document.querySelectorAll('body a')
// for(let i of body_a){
//     i.addEventListener('click',(e)=>{
//         e.preventDefault()
//     })
// }
// 팝업창
const body = document.querySelector('body, html')
const loginpopup_bg = document.querySelector ('.loginPop')//로그인 배경
const joinpopup_bg = document.querySelector ('.joinWrap')// 회원가입 배경
const login = document.querySelector ('#login')//로그인 버튼
const join = document.querySelector ('#join')// 조인 버튼
const login_access =document.querySelector ('.login')// 로그인 팝업창
const join_access = document.querySelector ('.joinPop')// 회원가입 팝업창
const joinGo = document.querySelector ('.joinGo')// 회원가입창으로 가기
const idPwfind = document.querySelector ('.idPwfind')//아이디,비밀번호 찾기
const searchBox = document.querySelector ('.searchBox')//아이디 비밀번호 팝업창
const bottom = document.querySelector ('.bottom')// 로그인 팝업창 밑 비회원 배송조회 부분
const nonShipping = document.querySelector ('.nonShipping') //비회원 배송조회 버튼
const nondelivery = document.querySelector ('.nondelivery') // 비회원 배송조회 팝업창
const nonlogin = document.querySelector ('.nonlogin') //비회원 배송조회에서 로그인하기
const terms = document.querySelector ('.terms') // 약관동의
const joinMembership = document.querySelector ('.joinMembership') // 약관동의로 넘어가기
const signupBtn = document.querySelector ('.signupBtn') // 가입하기로 들어가기 버튼
const signContainer =document.querySelector ('.signContainer') //가입하기 팝업창
const term = document.querySelector ('.term') // footer 배경
const useTerms = document.querySelector ('.useTerms') // footer 이용약관 버튼
const utiliTitle = document.querySelector ('.utiliTitle') // footer 이용약관
const infoPolicy = document.querySelector ('.infoPolicy') // footer 개인정보처리방침 버튼
const policyTitle = document.querySelector ('.policyTitle') // footer 개인정보처리방침 
const frmId = document.querySelector ('#frmId')
const frmPw = document.querySelector ('#frmPw')
const loginSel = document.querySelector ('.loginSel')
const closeLogin = document.querySelector ('.closeLogin')
const closeIdpw = document.querySelector ('.closeIdpw')
const closeDeli = document.querySelector ('.closeDeli')
const joinCloseBtn = document.querySelector ('.joinCloseBtn')
const closeTerms = document.querySelector ('.closeTerms')
const resetBtn = document.querySelector ('.resetBtn')
const signCloseBtn = document.querySelector ('.signCloseBtn')
const closeBtn01 = document.querySelector ('.closeBtn01')
const closeBtn02 = document.querySelector ('.closeBtn02')

console.log(login, loginpopup_bg, body, login_access, join, join_access, joinpopup_bg, joinGo, idPwfind, searchBox, bottom, nonShipping, nondelivery, nonlogin, terms, joinMembership, signupBtn, signContainer, useTerms, infoPolicy, term, utiliTitle, policyTitle, closeLogin )
console.log(closeIdpw)

loginpopup_bg.style.display = 'none'
joinpopup_bg.style.display = 'none'
login_access.style.display = 'none'
join_access.style.display = 'none'
term.style.display = 'none'

// 로그인 팝업
login.addEventListener('click',function(e){
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
    login_access.classList.remove('hide')
    bottom.style.display = 'block'
    nonShipping.style.display = 'block'
    e.preventDefault()
})
closeLogin.addEventListener('click',function(e){
    loginpopup_bg.style.display = 'none'
    e.preventDefault()
})

// 로그인 미입력시 알림
loginSel.addEventListener('click',(e)=>{
    if(frmPw.value == ''){
        alert('비밀번호를 입력하세요.')
    }
    if(frmId.value == ''){
        alert('아이디를 입력하세요.')
    }
    e.preventDefault()
})

// 아이디 비밀번호 찾기
idPwfind.addEventListener('click', function(e){
    searchBox.style.display = 'block'
    login_access.classList.add('hide')
    loginpopup_bg.style.display = 'flex'
    bottom.style.display = 'none'
    nonShipping.style.display = 'none'
    e.preventDefault()
})
closeIdpw.addEventListener('click',function(e){
    loginpopup_bg.style.display = 'none'
    searchBox.style.display = 'none'
    e.preventDefault()
})

//비회원 배송조회 팝업
nonShipping.addEventListener('click', function(e){
    nondelivery.style.display = 'block'
    login_access.classList.add('hide')
    loginpopup_bg.style.display = 'flex'
    e.preventDefault()
})

closeDeli.addEventListener('click', function(e){
    loginpopup_bg.style.display = 'none'
    nondelivery.style.display = 'none'
    e.preventDefault()
})

nonlogin.addEventListener('click', function(e){
    nondelivery.style.display = 'none'
    login_access.classList.remove('hide')
    loginpopup_bg.style.display = 'flex'
    e.preventDefault()
})

loginpopup_bg.addEventListener('click', function(e) {
    login_access.style.display = 'block'
    body.style.overflow = 'auto'
    e.preventDefault()
})

joinGo.addEventListener('click', function(e){
    joinpopup_bg.style.display = 'flex'
    join_access.style.display = 'block'
    loginpopup_bg.style.display = 'none'
    login_access.style.display = 'block'
    terms.style.display = 'none'
    e.preventDefault()
})

// 회원가입창

join.addEventListener('click', function(e){
    joinpopup_bg.style.display = 'flex'
    join_access.style.display = 'block'
    terms.style.display = 'none'
    e.preventDefault()
})

joinCloseBtn.addEventListener('click', function(e){
    joinpopup_bg.style.display = 'none'
    join_access.style.display = 'none'
    e.preventDefault()
})

joinMembership.addEventListener('click', function(e){
    joinpopup_bg.style.display = 'flex'
    terms.style.display = 'block'
    join_access.style.display = 'none'
    e.preventDefault()
})

closeTerms.addEventListener('click',function(e){
    joinpopup_bg.style.display = 'none'
    join_access.style.display = 'none'
    e.preventDefault()
})

signupBtn.addEventListener('click',function(e){
    joinpopup_bg.style.display = 'block'
    signContainer.style.display = 'block'
    terms.style.display = 'none'
    e.preventDefault()
})
signCloseBtn.addEventListener('click',function(e){
    joinpopup_bg.style.display = 'none'
    signContainer.style.display = 'none'
    e.preventDefault()
})
resetBtn.addEventListener('click', function(e){
    joinpopup_bg.style.display = 'none'
    join_access.style.display = 'none'
    e.preventDefault()
})

// footer area

useTerms.addEventListener('click', function(e){
    term.style.display = 'flex'
    utiliTitle.style.display = 'block'
    e.preventDefault()
})

infoPolicy.addEventListener('click', function(e){
    term.style.display = 'flex'
    policyTitle.style.display = 'block'
    e.preventDefault()
})

closeBtn01.addEventListener('click',function(e){
    term.style.display = 'none'
    utiliTitle.style.display = 'none'
    e.preventDefault()
})
closeBtn02.addEventListener('click',function(e){
    term.style.display = 'none'
    policyTitle.style.display = 'none'
    e.preventDefault()
})

const searchIdd = document.querySelector ('.searchIdd') // 아이디 찾기
const emailId = document.querySelector ('#emailId') // 이메일로 찾기
const searchPww = document.querySelector ('.searchPww') // 비밀번호 찾기
const username = document.querySelector ('#userName') // 이름으로 찾기
const phNumber = document.querySelector ('#phNumber') // 번호로 찾기
const selectBoxNum = document.querySelector ('#selectBoxNum') //체크박스 지워야함
const boxMail = document.querySelector ('.boxMail')
const boxNum = document.querySelector ('.boxNum')
const titleId = document.querySelector ('.titleId')
const titlePw = document.querySelector ('.titlePw')
const searchId = document.querySelector ('.searchId')
const searchPw = document.querySelector ('.searchPw')
const findIdPw = document.querySelector ('.findIdPw')
const findPwId = document.querySelector ('.findPwId')
const joinId = document.querySelector ('#joinId')

console.log (searchIdd, searchPww, emailId, username, phNumber, boxMail, boxNum, titleId, titlePw, searchPw )

emailId.style.display = 'block'
username.style.display = 'none'
phNumber.style.display = 'none'
selectBoxNum.style.display = 'none'

boxMail.addEventListener ('click', function(e){
    emailId.style.display = 'block'
    username.style.display = 'none'
    phNumber.style.display = 'none'
    e.preventDefault()
})

boxNum.addEventListener ('click', function(e){
    emailId.style.display = 'none'
    username.style.display = 'block'
    phNumber.style.display = 'block'
    e.preventDefault()
})

searchPww.addEventListener ('click', function(e){
    searchId.style.display = 'none'
    searchPw.style.display = 'block'
    searchPww.style.backgraund = '#fff'
    e.preventDefault()
})

searchIdd.addEventListener ('click', function(e){
    searchId.style.display = 'flex'
    searchPw.style.display = 'none'
    e.preventDefault()
})

findIdPw.addEventListener('click',()=>{
    if(emailId.value == ''){
        alert('입력하신 정보와 일치하는 계정이 없습니다. 다시 시도해주시거나 사이트 운영자에게 문의해주세요.')
    }
})

findPwId.addEventListener('click',()=>{
    if(joinId.value == ''){
        alert('입력하신 정보와 일치하는 계정이 없습니다. 다시 시도해주시거나 사이트 운영자에게 문의해주세요.')
    }
})

let swiperContainer01 = document.querySelector('#slide')
let swiper01 = new Swiper('#slide', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 0,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay:6000,},
    centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next01",
        prevEl: ".swiper-button-prev01",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            centeredSlides : false,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        centeredSlides : false,
        }
    },
})

let swiperContainer02 = document.querySelector('#productContainer')
let swiper02 = new Swiper('#productContainer', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 4,
    // 슬라이드 사이의 간격
    spaceBetween: 10,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay:2000,},
    centeredSlides : true,
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 1,
            centeredSlides : false,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides : false,
        }
    },
})

const chk = document.querySelectorAll('.Allchk .chk')
console.log(chk)

chk[0].addEventListener('change',()=>{
    for(let i = 1; i < chk.length; i++){
        chk[i].checked = chk[0].checked;
        }
});

const signup = document.querySelector('#signUpBtn')
console.log(signup)

signup.addEventListener('click',()=>{
    window.alert('회원가입이 완료 되었습니다.')
    location.href = '../index.html'
})

// 모바일 메뉴

const mMenu = document.querySelectorAll('.gnb li')

const down01 = document.querySelector('.down01')
const sub01 = document.querySelector('.sub01')

const down02 = document.querySelector('down02')
const sub02 = document.querySelector('.sub02')
console.log(mMenu, down01, sub01, down02, sub02)

sub01.style.display = 'none'
sub02.style.display = 'none'

let sub01_status = false
down01.addEventListener ('click',function(){
    if(sub01_status == false){
        console.log(sub01_status)
        sub01_status = !sub01_status
        sub01.style.display = 'block';
        down01.style.transform = 'scaleY(-1)'
    }else{
        console.log(sub01_status.status)
        sub01.style.display = 'none';
        down01.style.transform = 'scaleY(1)'
        sub01_status = !sub01_status
    }
})


