"use strict"

const _$ = (q, elm) => (elm ? elm : document).querySelector(q);
const _$$ = (q, elm) => (elm ? elm : document).querySelectorAll(q);

/* Hamburger menu */

_$('.header__menu-button').addEventListener('click', evt => {
//    console.log('evt1', evt);
    _$('.header__menu-inner').classList.add('header__menu-inner_transitionable');
    _$('.header__menu-container').classList.toggle('open');
})

document.addEventListener('click', evt => {
//    console.log('evt2', evt);
    if (!_$('.header__menu-inner').contains(evt.target) &&
        !_$('.header__menu-button').contains(evt.target)) {
        _$('.header__menu-container').classList.remove('open');
    }
});

const switch_resolution = getComputedStyle(document.documentElement).getPropertyValue('--switch-resolution');
const mql = window.matchMedia(`(max-width: ${switch_resolution})`);
mql.addEventListener("change", evt => {
//    console.log('evt3', evt);
    _$('.header__menu-inner').classList.remove('header__menu-inner_transitionable');
    _$('.header__menu-container').classList.remove('open');
});
