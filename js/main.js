'use strict';

const openMenuBtn=document.getElementById('dropdown-btn');
const closeMenuBtn=document.getElementById('close-menu-btn');
const navigationContainer=document.querySelector('.navigation-container');
const navLinks=document.querySelectorAll('.nav-link');
let icon=document.querySelectorAll('.nav-item-name img');
const resetIcon=()=>{
	icon.forEach(icon=>{
		icon.setAttribute('src','images/icon-arrow-down.svg');
		icon.setAttribute('alt','arrow pointing down');
	})
}
const closeAll=()=>{
	navLinks.forEach(item=>{
		let target=item.parentElement.parentElement;
		target.classList.remove('opened');
		resetIcon();
	});
}

navLinks.forEach(item=>{
	item.addEventListener('click',(e)=>{
		
		let target=e.target.parentElement.parentElement;
		let targetImg=target.querySelector('.nav-item-name img');
		console.log(target.className);
		if(target.classList.contains('opened')){
			target.classList.remove('opened');
			resetIcon();
		}else{
			closeAll();
			target.classList.add('opened');
			targetImg.setAttribute('src','images/icon-arrow-up.svg');
			targetImg.setAttribute('alt','arrow pointing up');
		}
	})
})


const openMenu=()=>{
	navigationContainer.classList.add('active');
}
const closeMenu=()=>{
	navigationContainer.classList.remove('active');
	closeAll();
}

openMenuBtn.addEventListener('click',openMenu);
closeMenuBtn.addEventListener('click',closeMenu);