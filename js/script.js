'use strict';
const menuBtn = document.querySelector('span');
const menuList = document.querySelector('#navbox');
function OpenMenu()
{
    if(menuBtn.innerHTML == 'menu')
    {
        menuBtn.innerHTML = 'close';
        menuList.classList.add('active');
    }
    else{
        menuBtn.innerHTML = 'menu';
        menuList.classList.remove('active');
    }
}