// // window.addEventListener('touchstart', () => { console.log('start') }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchend', () => { console.log('end') }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchmove', () => { 
// //     document.body.style.display = "none";
// //  }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchcancel', () => { console.log('cancel') });
let buttonActive;
let buttonActiveStories;
let isMobile = true;
let isComp = false;
let buttonid = 0;
let buttonidStories = 0;

let buttonsYouGet = [];
buttonsYouGet = document.querySelectorAll('.block-youGet-elements-curcle');

let buttonsStories = [];
buttonsStories = document.querySelectorAll('.block-stories-curcle');


let buttonsWeDo = [];
buttonsWeDo = document.querySelectorAll('.block-weDo-curcle');
console.log(buttonsWeDo + " " + buttonsWeDo.length)


let blocksYouGet = [];
blocksYouGet = document.querySelectorAll('.block-youGet-container');

let blocksStories = [];
blocksStories = document.querySelectorAll('.block-stories-border');

let blocksWeDo = [];
blocksWeDo = document.querySelectorAll('.block-weDo-elements');

window.onload = function(){
    if(this.screen.availWidth >= 774) {
        isMobile = false;
        isComp = true;
    }
    else{
        isMobile = true;
        isComp = false;
        blocksWeDo[1].classList.add('weDo-hide');
    }
}

window.addEventListener('resize', function() {
    if(this.screen.availWidth >= 774) {
        if(isMobile && !isComp){
            console.log("updateComp")
            updateblocksYouGetComp();
            isMobile = false;
            isComp = true;
        }
    }
    else{
        if(!isMobile && isComp){
            console.log("updateMob")
            updateblocksYouGetMobile();
            isMobile = true;
            isComp = false;
        }
    }
}, true);


for(let i = 0; i < buttonsYouGet.length; i++){
    
    if(buttonsYouGet[i].classList.contains('youGet-button-active')){
        buttonActive = buttonsYouGet[i];
        buttonNewActive = i;
        buttonOldActive = 0;
    }

    if(window.screen.availWidth >= 774){
        //ПК
        if(i < 3) {
            blocksYouGet[i].classList.remove('youGet-hide');
        }
        
    }
    else{
        blocksYouGet[0].classList.remove('youGet-hide');
    }
    buttonsYouGet[i].addEventListener('click', function() {
        if(this.classList.contains('youGet-button-active')) return;

        changeBlockYouGet(i, buttonid);
        this.classList.add('youGet-button-active');
        buttonActive.classList.remove('youGet-button-active');
        buttonActive = this;
        buttonid = i;

        console.log("click" + i)
    })
}
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

        console.log("click stories" + i)
    })
}
//
buttonsWeDo[0].addEventListener('click', function(){
    if(this.classList.contains('weDo-button-active')) return;
    this.classList.add('weDo-button-active');
    blocksWeDo[0].classList.remove('weDo-hide');

    buttonsWeDo[1].classList.remove('weDo-button-active');
    blocksWeDo[1].classList.add('weDo-hide');
})
buttonsWeDo[1].addEventListener('click', function(){
    if(this.classList.contains('weDo-button-active')) return;
    this.classList.add('weDo-button-active');
    blocksWeDo[1].classList.remove('weDo-hide');

    buttonsWeDo[0].classList.remove('weDo-button-active');
    blocksWeDo[0].classList.add('weDo-hide');


})


function changeBlockYouGet(_new, _old){
    console.log(_new + " " + _old)
    if(isMobile){
        console.log('test mob');
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

function updateblocksYouGetComp(){

    blocksWeDo[0].classList.remove('weDo-hide');
    blocksWeDo[1].classList.remove('weDo-hide');
    console.log("update compsuka!!!!")
    for(let i = 0; i < buttonsYouGet.length; i++){
        console.log('eblan!!!')
        buttonsYouGet[i].classList.remove("youGet-button-active");
        blocksYouGet[i].classList.add("youGet-hide");
    }
    blocksYouGet[0].classList.remove("youGet-hide");
    blocksYouGet[1].classList.remove("youGet-hide");
    blocksYouGet[2].classList.remove("youGet-hide");
    buttonsYouGet[0].classList.add("youGet-button-active");
    buttonActive = buttonsYouGet[0];
    buttonid = 0;
}
function updateblocksYouGetMobile(){
    blocksWeDo[0].classList.remove('weDo-hide');
    blocksWeDo[1].classList.add('weDo-hide');

    buttonsWeDo[0].classList.add('weDo-button-active');
    buttonsWeDo[1].classList.remove('weDo-button-active');
    console.log("updatemob suka")
    for(let i = 0; i < buttonsYouGet.length; i++){
        console.log('eblan')
        buttonsYouGet[i].classList.remove("youGet-button-active");
        blocksYouGet[i].classList.add("youGet-hide");
    }
    blocksYouGet[0].classList.remove("youGet-hide");
    buttonsYouGet[0].classList.add("youGet-button-active");
    buttonActive = buttonsYouGet[0];
    buttonid = 0;
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





