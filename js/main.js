"use strict"

const _$ = (q, elm) => (elm ? elm : document).querySelector(q);
const _$$ = (q, elm) => (elm ? elm : document).querySelectorAll(q);

/* Hamburger menu */

_$('.m-header__burger').addEventListener('click', evt => {
    _$('.m-header__box').classList.add('m-header__box_trans');
    _$('.m-header__box').classList.add('open');
})

_$('.m-header__burger-close').addEventListener('click', evt => {
    _$('.m-header__box').classList.remove('open');
    _$('.m-header__box').scrollTop = 0;
})

document.addEventListener('click', evt => {
    if (!_$('.m-header__box').contains(evt.target) &&!_$('.m-header__burger').contains(evt.target)) {
        _$('.m-header__box').classList.remove('open');
    }
});

const ham_res = getComputedStyle(document.documentElement).getPropertyValue('--ham-res');
const mql = window.matchMedia(`(max-width: ${ham_res}px)`);

mql.addEventListener("change", evt => {
    _$('.m-header__box').classList.remove('m-header__box_trans');
    _$('.m-header__box').classList.remove('open');
});
