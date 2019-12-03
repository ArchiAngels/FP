// delete test
let header = document.querySelector('.header');
let underheader = document.querySelector('.underHead');
let miniplans = document.querySelector('.miniPlans');
let presentvideos = document.querySelector('.PresentVideos');
let travalcategories = document.querySelector('.travalCategories');
let travalexp = document.querySelector('.travalExperienc');
let contrpre = document.querySelector('.contprelast');
let footer = document.querySelector('.footer');

let nottodel = [footer,contrpre,travalexp,travalcategories,presentvideos,miniplans,underheader,header];
let arr = [header,underheader,miniplans,presentvideos,travalcategories,travalexp,contrpre,footer];
let ler = [];
let key = 'notDEL';

window.addEventListener('click',mma);
function mma(){
    for(a = 0; a < nottodel.length; a++ ){
        for(i = 0; i < arr.length; i++ ){
            if(nottodel[a].className == arr[i].className){
                ler.push(arr[i]);
                arr[i] = 'notDEL';
            }
            
        }
    }
    mmatwo();
}
function mmatwo(){
    for(i = 0; i < arr.length; i++ ){
        if(arr[i] != 'notDEL'){
            arr[i].remove();
        }
    }
}
// burger menu
let navigator = document.querySelector('.nav');
window.addEventListener('resize',burgerstr);
window.addEventListener('load',burgerstr);

let stop = 0;
let clicks = 0;
function burgerstr(){
    let newdiv = document.createElement('div');
    if(window.innerWidth <= 950 && stop == 0){
        navigator.classList.add('classforNavHide');
        newdiv.style.width = 50 + 'px';
        newdiv.style.height = 50 + 'px';
        newdiv.style.border = '1px solid black';
        newdiv.style.marginTop = 10 + 'px';
        newdiv.style.position = 'absolute';
        newdiv.style.right = '0';
        newdiv.classList.add('burgerlist');
        newdiv.style.cursor = 'pointer';
        newdiv.addEventListener('click',spawnMenu);
        header.appendChild(newdiv);
        console.log('create burger',stop);
        stop = 1;
    }
    if(window.innerWidth >= 951 && stop == 1){
        navigator.classList.remove('classforNavHide');
        console.log('delete burger',stop,);
        header.removeChild(header.childNodes[header.childNodes.length - 1]);

        // header.removeChild(header.childNodes[0]);
        stop = 0;
    }    
    if(window.innerWidth >= 951 && (clicks %2 == 0 || clicks %2 != 0)){
        console.log(window.innerWidth,clicks);
        navigator.classList.remove('classforNav');
        navigator.classList.remove('classforNavHide');
        clicks = 0;
        stop = 0;
    }
    
}
function spawnMenu(){
    console.log('Clicked',clicks,navigator.childNodes[1]);
    if(clicks %2 == 0){
        navigator.classList.add('classforNav');
        navigator.classList.remove('classforNavHide');
    }
    
    else{
        navigator.classList.remove('classforNav');
        navigator.classList.add('classforNavHide');
    }
    clicks++;
}
// icon calendar event

let calendar = document.querySelector('.iconevent');
let divacl = document.querySelector('.calend');
let count = 0;
calendar.addEventListener('click',calfunc);

function calfunc(){
    count++;
    if(count == 1){
        divacl.classList.remove('hide');
    }  
    if(count == 2){
        divacl.classList.add('hide');
        count = 0;
    }
}

// travel exp

let phototravel = document.querySelector('.photouser');
let currnetTravvel;
let currnetOpinion = document.querySelector('.userOpinion');
let boxOfCrTr = document.getElementById('neddphotoExpid');
let previewArrow = document.querySelector('.preuser');
let nextArrow = document.querySelector('.nextuser');
let wrapperName = document.querySelector('.wrapToName');
let countphoto = 0;
let textOpinion = ['Curabitur posuere ullamcorper pulvinar. Donec dignissim bibendum leo, at faucibus enim aliquam eu. Nullam quis pulvinar diam, ac elementum urna. Integer id vehicula tortor, nec pulvinar libero. Ut elit elit, fringilla a nisi ut, dapibus eleifend quam.',
    'Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. ',
                    'Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. ',
                    'Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. ',
                    'Game of as rest time eyes with of this it. Add was music merry any truth since going. Happiness she ham but instantly put departure propriety. She amiable all without say spirits shy clothes morning. Frankness in extensive to belonging improving so certainty. ']
let photos = ['style/img/user1.jpg',
                'style/img/user2.jpg',
                'style/img/user3.jpg',
                'style/img/user4.jpg',
                'style/img/user5.jpg'];
let maxphoto = photos.length - 1;
let currentName = document.querySelector('.nameTravel');
let names = ['Donquixote Law','Crazy Slippery','Big Sharp','Cool Mild','Lifeless Quiet'];
let texts = [];
function photofunc(){
    if(countphoto > maxphoto){
        countphoto = 0;
    }
    if( countphoto < 0){
        countphoto = maxphoto;
    }
    phototravel.style.backgroundImage = 'url('+photos[countphoto]+')';
    if(countphoto >= 0 && countphoto <= maxphoto){
        nametravel(countphoto);
        balact(countphoto);
    }
}
window.onload = startAgain();
function startAgain(){
    for(i = 0; i< names.length; i++){
        // console.log('Create div',i);
        createDivStep();
    }
    currnetTravvel = document.querySelectorAll('.btnneddphotoExp');
    currnetTravvel[0].classList.add('activity');
    // console.log(currnetTravvel);
}

previewArrow.addEventListener('click',sliderPhotmin);
nextArrow.addEventListener('click',sliderPhotpos);

function sliderPhotpos(){
    countphoto++;
    photofunc();
}
function sliderPhotmin(){
    countphoto--;
    photofunc();
}
let brams = 0;
let newName = '';
function nametravel(bls = countphoto){
    
    // debugger;
    // let bls = countphoto;
    let MAXIMUM = names[bls].length - 1;
    newName = newName + names[bls][brams];
    currentName.innerHTML = newName;
    
    // console.log(bls,names[bls],newName);
    
    if(brams < MAXIMUM){
        currnetOpinion.innerHTML = (brams/MAXIMUM).toPrecision(2)*100 +'%';
        setTimeout(nametravel,125);
        brams++;
    }
    else{
        currnetOpinion.innerHTML = '"'+textOpinion[bls]+'"';
    // console.log(textOpinion[bls],bls);
        newName = '';
        brams = 0;
    }    
}
// console.log(currnetTravvel.length);
function balact(ss){
    
    let gll = [];
    let gllt = '';
    for(i = 0; i < currnetTravvel[ss].className.length; i++){
        // console.log(currnetTravvel[ss].className);
        // console.log(i,currnetTravvel[ss].className.length,currnetTravvel[ss].className[i]);
        if(currnetTravvel[ss].className[i] != ' '){
            gllt += currnetTravvel[ss].className[i];
        }
        if(currnetTravvel[ss].className[i] == ' '){
            // console.log(gllt);
            gll.push(gllt);
            gllt = '';
        }
        if(i + 1 == currnetTravvel[ss].className.length){
            gll.push(gllt);
            // console.log('ERR',gllt);
            gllt = '';
        }

    }
    alldark();
    // console.log(gllt,gll);
    for( i = 0; i < gll.length; i++){
        if(gll[i] != 'activity'){
            currnetTravvel[ss].classList.add('activity');
        }
        else{
            currnetTravvel[ss].classList.remove('activity');
        }

        
    }
    
}
function alldark(){
    for(i = 0; i < currnetTravvel.length; i++){
        currnetTravvel[i].classList.remove('activity');
        // console.log(currnetTravvel.length,currnetTravvel[i]);
    }
}

function createDivStep(){
    // console.log(boxOfCrTr);
    let bratmp1 = document.createElement('div');
    bratmp1.classList.add('btnneddphotoExp');
    // console.log(bratmp1);
    boxOfCrTr.appendChild(bratmp1);
    // console.log(currnetTravvel[length],bratmp1,boxOfCrTr);
}