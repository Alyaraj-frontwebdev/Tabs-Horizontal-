let btn = document.getElementsByTagName('button');
let content = document.getElementById('main');
let bgImg = document.querySelector('body');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click', ()=>{
        if(btn[i].innerText == "SYDNEY"){
            content.innerHTML = "Sydney";
            bgImg.style.background = "url('https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg')";
            bgImg.style.backgroundSize = "100% 100%";
            btn[0].classList.add('active');
            btn[1].classList.remove('active');
            btn[2].classList.remove('active');
            btn[3].classList.remove('active');
            btn[4].classList.remove('active');
        }
        else if(btn[i].innerText == "PARIS"){
            content.innerHTML = "Paris";
            bgImg.style.background = "url('https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg')";
            bgImg.style.backgroundSize = "100% 100%";
            btn[1].classList.add('active');
            btn[0].classList.remove('active');
            btn[2].classList.remove('active');
            btn[3].classList.remove('active');
            btn[4].classList.remove('active');
        }
        else if(btn[i].innerText == "ROME"){
            content.innerHTML = "Rome";
            bgImg.style.background = "url('https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg')";
            bgImg.style.backgroundSize = "100% 100%";
            btn[3].classList.add('active');
            btn[0].classList.remove('active');
            btn[1].classList.remove('active');
            btn[2].classList.remove('active');
            btn[4].classList.remove('active');
        }
        else if(btn[i].innerText == "DUBAI"){
            content.innerHTML = "Dubai";
            bgImg.style.background = "url('https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/newsletter/shutterstock_1196821240.jpg?1622542766')";
            bgImg.style.backgroundSize = "100% 100%";
            btn[2].classList.add('active');
            btn[0].classList.remove('active');
            btn[1].classList.remove('active');
            btn[3].classList.remove('active');
            btn[4].classList.remove('active');
        }
        else{
            content.innerHTML = "Moscow";
            bgImg.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg')";
            bgImg.style.backgroundSize = "100% 100%";
            btn[4].classList.add('active');
            btn[0].classList.remove('active');
            btn[1].classList.remove('active');
            btn[2].classList.remove('active');
            btn[3].classList.remove('active');
        }
    })
}