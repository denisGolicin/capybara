// // window.addEventListener('touchstart', () => { console.log('start') }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchend', () => { console.log('end') }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchmove', () => { 
// //     document.body.style.display = "none";
// //  }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchcancel', () => { console.log('cancel') });
let buttonActive;
let buttonActiveStories;
let buttonActiveTeam;
let buttonActiveWith;
let isMobile = true;
let isComp = false;
let buttonid = 0;
let buttonidStories = 0;
let buttonidTeam = 0;
let buttonidWith = 0;
let buttonidStories2 = 0;
let buttonActiveStories2;

let hed = document.getElementsByTagName('header')[0];

let buttonsYouGet = [];
buttonsYouGet = document.querySelectorAll('.block-youGet-elements-curcle');

let buttonsWith = [];
buttonsWith = document.querySelectorAll('.with-curcle');

let buttonsTeam = [];
buttonsTeam = document.querySelectorAll('.team-curcle');

let buttonsStories = [];
buttonsStories = document.querySelectorAll('.block-stories-curcle');

let buttonsStories2 = [];
buttonsStories2 = document.querySelectorAll('.block-stories-buttons-item');


let buttonsWeDo = [];
buttonsWeDo = document.querySelectorAll('.block-weDo-curcle');

let blocksYouGet = [];
blocksYouGet = document.querySelectorAll('.block-youGet-container');

let blocksWith = [];
blocksWith = document.querySelectorAll('.block-with-card');

let blocksTeam = [];
blocksTeam = document.querySelectorAll('.block-team-card');

let blocksStories = [];
blocksStories = document.querySelectorAll('.block-stories-border');

let blocksWeDo = [];
blocksWeDo = document.querySelectorAll('.block-weDo-elements');

let burger = document.querySelector('.header-burger');
let burgerMenu = document.querySelector('.block-nav-menu');

let burgerLine = [];
burgerLine = document.querySelectorAll('.burger-line');

let withButton = [];
withButton = document.querySelectorAll('.with-card-button');
let formI = document.getElementById('formI');
let closeForm = document.getElementById('closeForm');
let idWith;

document.addEventListener("DOMContentLoaded", function(){
    // loadt = document.querySelector('.load-block');
    // loadt.style.display = "none";

    if(window.matchMedia('(max-width: 774px)').matches) {
        isMobile = true;
        isComp = false;
        blocksWeDo[1].classList.add('weDo-hide');
        updateblocksYouGetMobile();
    }
    else{
        blocksWeDo[1].classList.remove('weDo-hide');
        isMobile = false;
        isComp = true;
        updateblocksYouGetComp();
        
    }
})


window.addEventListener('resize', function() {
    if(window.matchMedia('(max-width: 774px)').matches) {
        if(!isMobile && isComp){
            updateblocksYouGetMobile();
            isMobile = true;
            isComp = false;
            
        }
    }
    else{
        
        if(isMobile && !isComp){
            updateblocksYouGetComp();
            isMobile = false;
            isComp = true;
        }
    }
}, true);

burger.addEventListener("click", function() {
    console.log('burger click')
    if(burgerMenu.classList.contains('burger-hide')){
        burgerMenu.classList.remove('burger-hide');

        burgerLine[0].classList.add('line-up');
        burgerLine[1].classList.add('line-border');
        burgerLine[2].classList.add('line-down');
    }
    else{
        burgerMenu.classList.add('burger-hide');
        hed.style.opacity = ".4"
        burgerLine[0].classList.remove('line-up');
        burgerLine[1].classList.remove('line-border');
        burgerLine[2].classList.remove('line-down');
    }
})

for(let i = 0; i < buttonsTeam.length; i++){
    
    if(buttonsTeam[i].classList.contains('team-button-active')){
        buttonActiveTeam = buttonsTeam[i];
    }

    if(window.matchMedia('(max-width: 774px)').matches){
        
        blocksTeam[0].classList.remove('team-hide');
    }
    else{
        //ПК
        if(i < 3) {
            blocksTeam[i].classList.remove('team-hide');
        }
    }
    buttonsTeam[i].addEventListener('click', function() {
        if(this.classList.contains('team-button-active')) return;

        changeBlockTeam(i, buttonidTeam);
        this.classList.add('team-button-active');
        buttonActiveTeam.classList.remove('team-button-active');
        buttonActiveTeam = this;
        buttonidTeam = i;

        console.log("Block Team click: " + i)
    })
}
let h = document.querySelector('.block-team');
h.addEventListener('touchstart', handleTouchStart5, false);        
h.addEventListener('touchmove', handleTouchMove5, false);

function getTouches5(evt) {
return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     
                                                                        
function handleTouchStart5(evt) {
    const firstTouch = getTouches5(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                        
function handleTouchMove5(evt) {
    if(!isMobile) return;
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            //alert('right')
            if(buttonidTeam >= buttonsTeam.length -1) return;
            let last = buttonidTeam;
            buttonidTeam += 1;
            
            

            changeBlockTeam(buttonidTeam, last);
            
            buttonsTeam[buttonidTeam].classList.add('team-button-active');
            buttonActiveTeam.classList.remove('team-button-active');

            buttonActiveTeam = buttonsTeam[buttonidTeam];
            
            
            
        } else {
            /* left swipe */
            if(buttonidTeam <= 0) return;
            let last = buttonidTeam;
            buttonidTeam -= 1;
            
            

            changeBlockTeam(buttonidTeam, last);
            buttonsTeam[buttonidTeam].classList.add('team-button-active');
            buttonActiveTeam.classList.remove('team-button-active');

            buttonActiveTeam = buttonsTeam[buttonidTeam];
            
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


for(let i = 0; i < withButton.length; i++){
    
    withButton[i].addEventListener("click", function(){
        formI.style.display = 'block';
    })
}
closeForm.addEventListener("click", function(){
    formI.style.display = 'none';
})

for(let i = 0; i < buttonsYouGet.length; i++){
    
    if(buttonsYouGet[i].classList.contains('youGet-button-active')){
        buttonActive = buttonsYouGet[i];
    }

    if(window.matchMedia('(max-width: 774px)').matches){
        
        blocksYouGet[0].classList.remove('youGet-hide');
    }
    else{
        //ПК
        if(i < 3) {
            blocksYouGet[i].classList.remove('youGet-hide');
        }
    }
    buttonsYouGet[i].addEventListener('click', function() {
        if(this.classList.contains('youGet-button-active')) return;


        changeBlockYouGet(i, buttonid);
        this.classList.add('youGet-button-active');
        buttonActive.classList.remove('youGet-button-active');
        buttonActive = this;
        buttonid = i;

        console.log("Block youGet click: " + i)
    })
}
let xDown = null;                                                        
let yDown = null;

a = document.querySelector('.block-youGet');
a.addEventListener('touchstart', handleTouchStart, false);        
a.addEventListener('touchmove', handleTouchMove, false);

function getTouches(evt) {
return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     
                                                                        
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                        
function handleTouchMove(evt) {
    if(!isMobile) return;
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            //alert('right')
            
            if(buttonid >= buttonsYouGet.length -1) return;
            let last = buttonid;
            buttonid += 1;
            
            

            changeBlockYouGet(buttonid, last);
            buttonsYouGet[buttonid].classList.add('youGet-button-active');
            buttonActive.classList.remove('youGet-button-active');

            buttonActive = buttonsYouGet[buttonid];
        } else {
            /* left swipe */
            if(buttonid <= 0) return;
            let last = buttonid;
            buttonid -= 1;
            

            changeBlockYouGet(buttonid, last);
            buttonsYouGet[buttonid].classList.add('youGet-button-active');
            buttonActive.classList.remove('youGet-button-active');

            buttonActive = buttonsYouGet[buttonid];
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};




let weDoItem = [];
weDoItem = document.querySelectorAll('.block-weDo-item');


document.body.addEventListener("scroll", function () {

    if(!isMobile) return;
    if(this.scrollTop > 30){
        hed.style.opacity = ".4"
    }
    else{
        hed.style.opacity = "1"
    }
    if(this.scrollTop > blocksWeDo[0].scrollHeight){
        weDoItem[0].style.borderColor = "#F3F8FE";
        
    }
    else{
        weDoItem[0].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 150){
        weDoItem[1].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[1].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 250){
        weDoItem[2].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[2].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 350){
        weDoItem[3].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[3].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 450){
        weDoItem[4].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[4].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 550){
        weDoItem[5].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[5].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 700){
        weDoItem[6].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[6].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight ){
        weDoItem[7].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[7].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 150){
        weDoItem[8].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[8].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 250){
        weDoItem[9].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[9].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 350){
        weDoItem[10].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[10].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 500){
        weDoItem[11].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[11].style.borderColor = "#F3F8FE00";
    }

    if(this.scrollTop > blocksWeDo[0].scrollHeight + 600){
        weDoItem[12].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[12].style.borderColor = "#F3F8FE00";
    }
    if(this.scrollTop > blocksWeDo[0].scrollHeight + 700){
        weDoItem[13].style.borderColor = "#F3F8FE";
    }
    else{
        weDoItem[13].style.borderColor = "#F3F8FE00";
    }
}, false);
//
for(let i = 0; i < buttonsStories.length; i++){
    
    if(buttonsStories[i].classList.contains('stories-button-active')){
        buttonActiveStories = buttonsStories[i];
    }

    buttonsStories[i].addEventListener('click', function() {
        if(this.classList.contains('stories-button-active')) return;

        blocksStories[buttonidStories].classList.add('stories-hide');
        blocksStories[i].classList.remove('stories-hide');

        this.classList.add('stories-button-active');
        buttonActiveStories.classList.remove('stories-button-active');
        buttonActiveStories = this;
        buttonidStories = i;

        console.log("Block stories click: " + i)
    })
}

c = document.querySelector('.block-stories');
c.addEventListener('touchstart', handleTouchStart3, false);        
c.addEventListener('touchmove', handleTouchMove3, false);

function getTouches3(evt) {
return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     
                                                                        
function handleTouchStart3(evt) {
    const firstTouch = getTouches3(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                        
function handleTouchMove3(evt) {
    if(!isMobile) return;
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            //alert('right')
            if(buttonidStories >= 5) return;

            blocksStories[buttonidStories].classList.add('stories-hide');
            buttonActiveStories.classList.remove('stories-button-active');
            

            buttonidStories += 1;
            buttonActiveStories = buttonsStories[buttonidStories];

            blocksStories[buttonidStories].classList.add('stories-hide');
            buttonActiveStories.classList.remove('stories-button-active');

            blocksStories[buttonidStories].classList.remove('stories-hide');
            buttonActiveStories.classList.add('stories-button-active');
            
            
        } else {
            /* left swipe */
            if(buttonidStories <= 0) return;

            blocksStories[buttonidStories].classList.add('stories-hide');
            buttonActiveStories.classList.remove('stories-button-active');
            

            buttonidStories -= 1;
            buttonActiveStories = buttonsStories[buttonidStories];

            blocksStories[buttonidStories].classList.add('stories-hide');
            buttonActiveStories.classList.remove('stories-button-active');

            blocksStories[buttonidStories].classList.remove('stories-hide');
            buttonActiveStories.classList.add('stories-button-active');
            
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

for(let i = 0; i < buttonsWith.length; i++){
    
    if(buttonsWith[i].classList.contains('with-button-active')){
        buttonActiveWith = buttonsWith[i];
    }

    buttonsWith[i].addEventListener('click', function() {
        if(this.classList.contains('with-button-active')) return;

        blocksWith[buttonidWith].classList.add('with-hide');
        blocksWith[i].classList.remove('with-hide');

        this.classList.add('with-button-active');
        buttonActiveWith.classList.remove('with-button-active');
        buttonActiveWith = this;
        buttonidWith = i;

        console.log("Block With click: " + i)
    })
}

g = document.querySelector('.block-with');
g.addEventListener('touchstart', handleTouchStart4, false);        
g.addEventListener('touchmove', handleTouchMove4, false);

function getTouches4(evt) {
return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     
                                                                        
function handleTouchStart4(evt) {
    const firstTouch = getTouches4(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                        
function handleTouchMove4(evt) {
    if(!isMobile) return;
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            //alert('right')
            if(buttonidWith >= 3) return;

            blocksWith[buttonidWith].classList.add('with-hide');
            buttonActiveWith.classList.remove('with-button-active');

            buttonidWith += 1;
            buttonActiveWith = buttonsWith[buttonidWith];

            blocksWith[buttonidWith].classList.add('with-hide');
            buttonActiveWith.classList.remove('with-button-active');

            blocksWith[buttonidWith].classList.remove('with-hide');
            buttonActiveWith.classList.add('with-button-active');
            
            
            
        } else {
            /* left swipe */
            if(buttonidWith <= 0) return;

            blocksWith[buttonidWith].classList.add('with-hide');
            buttonActiveWith.classList.remove('with-button-active');

            buttonidWith -= 1;
            buttonActiveWith = buttonsWith[buttonidWith];

            blocksWith[buttonidWith].classList.add('with-hide');
            buttonActiveWith.classList.remove('with-button-active');

            blocksWith[buttonidWith].classList.remove('with-hide');
            buttonActiveWith.classList.add('with-button-active');
            
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

// let events = null;
// document.addEventListener("touchstart", function (e) {
//     events = e;
// });
// document.addEventListener("touchmove", function (e) {
    
// });
// document.addEventListener("touched", function (e) {
//     if (events) {
//         alert("Move delta: " + (e.touches[0].pageY - events.touches[0].pageY))
//     }
//     events = null;
// });

let rad1 = document.getElementById('rad1');
let rad2 = document.getElementById('rad2');
let rad3 = document.getElementById('rad3');

let result = "Make a Call";

rad1.addEventListener("click", function(){
    result = "Make a Call";
})
rad2.addEventListener("click", function(){
    result = "WhatsApp";
})
rad3.addEventListener("click", function(){
    result = "Telegram";
})

let area = document.getElementById('area');

let tg = {
    token: "5833706867:AAFBzepOXSTn4CjUOkdS1A_tgeY2BrFVprY", 
    chat_id: "-1001524111766" 
}
let sendTg = document.getElementById('sendTg');
sendTg.addEventListener("click", function(e){
    e.preventDefault();

    let info = document.forms.forma;
    let name = info.elements.namr.value;
    let phone = info.elements.phoneE.value;


    if(String(name).length < 5){

        info.elements.namr.style.boxShadow = "0 0 5px red";
        return;
    }
    else{
        info.elements.namr.style.boxShadow = "none";
    }
    if(String(phone).length < 10){
        
        info.elements.phoneE.style.boxShadow = "0 0 5px red";
        return;
    }
    else{
        info.elements.phoneE.style.boxShadow = "none";
    }
    let str;
    if(buttonidWith + 1 == 1){
        str = "Consultation";
    }
    if(buttonidWith + 1 == 2){
        str = "Cost Effective";
    }
    if(buttonidWith + 1 == 3){
        str = "Best Offer";
    }
    if(buttonidWith + 1 == 4){
        str = "Premium Service";
    }


    console.log(result);
    console.log(area.value);
    let r = area.value;
    sendMessage(
        "Заявка с сайта!\n" +
        "Имя: " + String(name) + "\n" +
        "Телефон: " + String(phone) + "\n" +
        "Способ связи: " + String(result) + "\n" +
        "Тариф: " + str + "\n" +
        "Комментарий: " + String(r)
    );

    result = "Make a Call";
    info.elements.namr.value = "";
    info.elements.phoneE.value = "";
    area.value = "";
    formI.style.display = "none";
    // delay form
})
// https://api.telegram.org/bot715125500:5256737385:AAHlQd83rrsgc5vwjL0k-6mDYfsz7J_ZD7I/sendMessage?chat_id=-1001212271187&parse_mode=HTML&text=test
function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: text // The text to send
    };
    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));

    
}


for(let i = 0; i < buttonsStories2.length; i++){
    
    if(buttonsStories2[i].style.opacity > '0.4'){
        buttonActiveStories2 = buttonsStories2[i];
    }

    buttonsStories2[i].addEventListener('click', function() {
        if(this.style.opacity > 0.4) return;

        blocksStories[buttonidStories2].classList.add('stories-hide');
        blocksStories[i].classList.remove('stories-hide');

        this.style.opacity = '1';
        buttonActiveStories2.style.opacity = '0.4';
        buttonActiveStories2 = this;
        buttonidStories2 = i;

        console.log("Block stories of comp click: " + i)
    })
}
//
let d = [];
    d = document.querySelectorAll('.block-weDo-elements');
    d[0].style.zIndex = '3';
    d[1].style.zIndex = '0';
    let b = document.getElementById('project');

buttonsWeDo[0].addEventListener('click', function(){
    if(this.classList.contains('weDo-button-active')) return;
    this.classList.add('weDo-button-active');
    blocksWeDo[0].classList.remove('weDo-hide');

    buttonsWeDo[1].classList.remove('weDo-button-active');
    blocksWeDo[1].classList.add('weDo-hide');
    

    d[1].style.zIndex = '0';
    d[0].style.zIndex = '3';

    b.style.Height = "1000px";


})

b = document.querySelector('.block-weDo');
b.addEventListener('touchstart', handleTouchStart2, false);        
b.addEventListener('touchmove', handleTouchMove2, false);

function getTouches2(evt) {
return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     
                                                                        
function handleTouchStart2(evt) {
    const firstTouch = getTouches2(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                        
function handleTouchMove2(evt) {
    if(!isMobile) return;
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            //alert('right')
            
            buttonsWeDo[1].classList.add('weDo-button-active');
            blocksWeDo[1].classList.remove('weDo-hide');

            buttonsWeDo[0].classList.remove('weDo-button-active');
            blocksWeDo[0].classList.add('weDo-hide');

            d[0].style.zIndex = '0';
            d[1].style.zIndex = '3';

            b.style.Height = "1200px";
            
        } else {
            /* left swipe */
            buttonsWeDo[0].classList.add('weDo-button-active');
            blocksWeDo[0].classList.remove('weDo-hide');


            buttonsWeDo[1].classList.remove('weDo-button-active');
            blocksWeDo[1].classList.add('weDo-hide');
    

            d[1].style.zIndex = '0';
            d[0].style.zIndex = '3';

            b.style.Height = "1000px";
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

buttonsWeDo[1].addEventListener('click', function(){
    if(this.classList.contains('weDo-button-active')) return;
    this.classList.add('weDo-button-active');
    blocksWeDo[1].classList.remove('weDo-hide');

    buttonsWeDo[0].classList.remove('weDo-button-active');
    blocksWeDo[0].classList.add('weDo-hide');

    d[0].style.zIndex = '0';
    d[1].style.zIndex = '3';

    b.style.Height = "1200px";

})


function changeBlockYouGet(_new, _old){
    console.log(_new + " " + _old)
    if(isMobile){
        blocksYouGet[_old].classList.add('youGet-hide');
        blocksYouGet[_new].classList.remove('youGet-hide');
        return;
        
    }
    else {
        // i == 3
        if(_new == 0){
            if(_old == 1){
                blocksYouGet[3].classList.add('youGet-hide');
                blocksYouGet[4].classList.add('youGet-hide');
                blocksYouGet[5].classList.add('youGet-hide');
            }
            if(_old == 2){
                blocksYouGet[6].classList.add('youGet-hide');
                blocksYouGet[7].classList.add('youGet-hide');
                blocksYouGet[8].classList.add('youGet-hide');
            }
            blocksYouGet[0].classList.remove('youGet-hide');
            blocksYouGet[1].classList.remove('youGet-hide');
            blocksYouGet[2].classList.remove('youGet-hide');
        }
        if(_new === 1){
            if(_old === 0){
                blocksYouGet[0].classList.add('youGet-hide');
                blocksYouGet[1].classList.add('youGet-hide');
                blocksYouGet[2].classList.add('youGet-hide');
            }
            if(_old === 2){
                blocksYouGet[6].classList.add('youGet-hide');
                blocksYouGet[7].classList.add('youGet-hide');
                blocksYouGet[8].classList.add('youGet-hide');
            }
            blocksYouGet[3].classList.remove('youGet-hide');
            blocksYouGet[4].classList.remove('youGet-hide');
            blocksYouGet[5].classList.remove('youGet-hide');
        }
        if(_new === 2){
            if(_old === 0){
                blocksYouGet[0].classList.add('youGet-hide');
                blocksYouGet[1].classList.add('youGet-hide');
                blocksYouGet[2].classList.add('youGet-hide');
            }
            if(_old === 1){
                blocksYouGet[3].classList.add('youGet-hide');
                blocksYouGet[4].classList.add('youGet-hide');
                blocksYouGet[5].classList.add('youGet-hide');
            }
            blocksYouGet[6].classList.remove('youGet-hide');
            blocksYouGet[7].classList.remove('youGet-hide');
            blocksYouGet[8].classList.remove('youGet-hide');
        }
    }
}

function changeBlockTeam(_new, _old){
    console.log(_new + " " + _old);
    if(isMobile){
        blocksTeam[_old].classList.add('team-hide');
        blocksTeam[_new].classList.remove('team-hide');
        return;
        
    }
    else {
        // i == 3
        if(_new == 0){
            if(_old == 1){
                blocksTeam[3].classList.add('team-hide');
                blocksTeam[4].classList.add('team-hide');
                blocksTeam[5].classList.add('team-hide');
            }
            if(_old == 2){
                blocksTeam[6].classList.add('team-hide');
                blocksTeam[7].classList.add('team-hide');
                blocksTeam[8].classList.add('team-hide');
            }
            blocksTeam[0].classList.remove('team-hide');
            blocksTeam[1].classList.remove('team-hide');
            blocksTeam[2].classList.remove('team-hide');
        }
        if(_new === 1){
            if(_old === 0){
                blocksTeam[0].classList.add('team-hide');
                blocksTeam[1].classList.add('team-hide');
                blocksTeam[2].classList.add('team-hide');
            }
            if(_old === 2){
                blocksTeam[6].classList.add('team-hide');
                blocksTeam[7].classList.add('team-hide');
                blocksTeam[8].classList.add('team-hide');
            }
            blocksTeam[3].classList.remove('team-hide');
            blocksTeam[4].classList.remove('team-hide');
            blocksTeam[5].classList.remove('team-hide');
        }
        if(_new === 2){
            if(_old === 0){
                blocksTeam[0].classList.add('team-hide');
                blocksTeam[1].classList.add('team-hide');
                blocksTeam[2].classList.add('team-hide');
            }
            if(_old === 1){
                blocksTeam[3].classList.add('team-hide');
                blocksTeam[4].classList.add('team-hide');
                blocksTeam[5].classList.add('team-hide');
            }
            blocksTeam[6].classList.remove('team-hide');
            blocksTeam[7].classList.remove('team-hide');
            blocksTeam[8].classList.remove('team-hide');
        }
    }
}

function updateblocksYouGetComp(){

    blocksWeDo[0].classList.remove('weDo-hide');
    blocksWeDo[1].classList.remove('weDo-hide');
    console.log("Adaptation of comp");
    for(let i = 0; i < buttonsYouGet.length; i++){
        buttonsYouGet[i].classList.remove("youGet-button-active");
        blocksYouGet[i].classList.add("youGet-hide");
    }
    blocksYouGet[0].classList.remove("youGet-hide");
    blocksYouGet[1].classList.remove("youGet-hide");
    blocksYouGet[2].classList.remove("youGet-hide");
    buttonsYouGet[0].classList.add("youGet-button-active");
    buttonActive = buttonsYouGet[0];
    buttonid = 0;

    for(let i = 0; i < buttonsTeam.length; i++){
        buttonsTeam[i].classList.remove("team-button-active");
        blocksTeam[i].classList.add("team-hide");
    }
    blocksTeam[0].classList.remove("team-hide");
    blocksTeam[1].classList.remove("team-hide");
    blocksTeam[2].classList.remove("team-hide");
    buttonsTeam[0].classList.add("team-button-active");
    buttonActiveTeam = buttonsTeam[0];
    buttonidTeam = 0;

    for(let i = 0; i < buttonsWith.length; i++){
        buttonsWith[i].classList.remove("with-button-active");
        blocksWith[i].classList.remove("with-hide");
    }

    for(let i = 0; i < buttonsStories2.length; i++){
        buttonsStories2[i].style.opacity = '0.4';
        blocksStories[i].classList.add("stories-hide");
    }
    blocksStories[1].classList.remove("stories-hide");
    buttonsStories2[1].style.opacity = '1';
    buttonActiveStories2 = buttonsStories2[1];
    buttonidStories2 = 1;
}
function updateblocksYouGetMobile(){
    blocksWeDo[0].classList.remove('weDo-hide');
    blocksWeDo[1].classList.add('weDo-hide');

    buttonsWeDo[0].classList.add('weDo-button-active');
    buttonsWeDo[1].classList.remove('weDo-button-active');
    
    console.log("Adaptation of mob");
    for(let i = 0; i < buttonsYouGet.length; i++){
        buttonsYouGet[i].classList.remove("youGet-button-active");
        blocksYouGet[i].classList.add("youGet-hide");
    }
    blocksYouGet[0].classList.remove("youGet-hide");
    buttonsYouGet[0].classList.add("youGet-button-active");
    buttonActive = buttonsYouGet[0];
    buttonid = 0;

    for(let i = 0; i < buttonsWith.length; i++){
        buttonsWith[i].classList.remove("with-button-active");
        blocksWith[i].classList.add("with-hide");
    }
    buttonsWith[3].classList.add("with-button-active");
    blocksWith[3].classList.remove("with-hide");
    buttonActiveWith = buttonsWith[3];
    buttonidWith = 3;

    for(let i = 0; i < buttonsTeam.length; i++){
        buttonsTeam[i].classList.remove("team-button-active");
        blocksTeam[i].classList.add("team-hide");
    }
    blocksTeam[0].classList.remove("team-hide");
    buttonsTeam[0].classList.add("team-button-active");
    buttonActiveTeam = buttonsTeam[0];
    buttonidTeam = 0;

    for(let i = 0; i < buttonsStories.length; i++){
        buttonsStories[i].classList.remove("stories-button-active");
        blocksStories[i].classList.add("stories-hide");
    }
    blocksStories[1].classList.remove("stories-hide");
    buttonsStories[1].classList.add("stories-button-active");
    buttonActiveStories = buttonsStories[1];
    buttonidStories = 1;

}



// let buttonsYouGet = [];
// buttonsYouGet = document.querySelectorAll('.block-youGet-elements-curcle');

// for(let i = 0; i < buttonsYouGet.length; i++){
//     if(i == 0){
//         buttonActive = buttonsYouGet[i];
//     }
//     buttonsYouGet[i].addEventListener('click', function(){

//         console.log(this);
//         this.classList.add('youGet-button-active');
//         buttonActive.classList.remove('youGet-button-active');
//         buttonActive = this;

//     })


// }





