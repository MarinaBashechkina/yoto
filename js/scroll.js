let header=document.querySelector('.header');
const n=450;
window.addEventListener('scroll',function(){
    if(window.scrollY>n)
        header.classList.add('header_fixed')
    else{
        header.classList.remove('header_fixed')
    }
})
