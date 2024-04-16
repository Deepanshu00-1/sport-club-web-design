'Use strict';

document.querySelector('.loginbutton').addEventListener('click', function(){
    document.querySelector('.loginpopup').classList.remove('popup');
    console.log('button clicked');
});
document.querySelector('#shut').addEventListener('click',function(){
    document.querySelector('.loginpopup').classList.add('popup');
})