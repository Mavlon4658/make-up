let heroSwiper = new Swiper('.hero .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".hero .swiper_btn__next",
        prevEl: ".hero .swiper_btn__prev",
    },
    pagination: {
        el: ".hero .swiper_pagination",
        clickable: true,
    },
})

let brands = document.querySelectorAll('.brand');

if (brands.length) {
    brands.forEach(el => {
        let brandSwiper = new Swiper(el.querySelector('.brand__top'), {
            slidesPerView: 2,
            spaceBetween: 4,
            breakpoints: {
                1100: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
                850: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
            },
            navigation: {
                nextEl: el.querySelector('.swiper__top_btn__next'),
                prevEl: el.querySelector('.swiper__top_btn__prev')
            },
            pagination: {
                el: el.querySelector('.swiper__top_pagination'),
                clickable: true,
            }
        })

        let brandBigSwiper = new Swiper(el.querySelector('.brand__bottom'), {
            slidesPerView: 1,
            spaceBetween: 16,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            },
            navigation: {
                nextEl: el.querySelector('.swiper__bottom_btn__next'),
                prevEl: el.querySelector('.swiper__bottom_btn__prev'),
            },
            pagination: {
                el: el.querySelector('.swiper__bottom_pagination'),
                clickable: true,
            }
        })
    })
}

let reviewSwiper = new Swiper('.review .swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
    navigation: {
        nextEl: '.review .swiper_btn__next',
        prevEl: '.review .swiper_btn__prev',
    },
    pagination: {
        el: '.review .swiper_pagination',
        clickable: true,
    }
})

let menuBtn = document.querySelector('.bars');
let menuBtnClose = document.querySelector('.mobile_menu__close');
let mobileMenu = document.querySelector('.mobile_menu');
if (menuBtn) {
    menuBtn.onclick = () => {
        mobileMenu.classList.add('active');
    }

    menuBtnClose.onclick = () => {
        mobileMenu.classList.remove('active')
    }
}

let scrollTop = document.querySelector('.scroll_top');

window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
})

scrollTop.onclick = () => {
    window.scrollTo(0, 0);
}

const items = document.querySelectorAll('.accordion');

if (items.length) {
    items.forEach((item) => {
        const header = item.querySelector('.accordion__head');
        const content = item.querySelector('.accordion__body');
    
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    
        header.addEventListener('click', () => {
            item.classList.toggle('active')
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
}

let checkbox = document.querySelectorAll('.checkbox');

if (checkbox.length) {
    checkbox.forEach(el => {
        let i = el.querySelector('input');

        let check = () => {
            if (i.checked) {
                el.classList.add('active');
            } else {
                el.classList.remove('active')
            }
        }

        check();

        el.onclick = () => {
            i.click();
            check();
        }
    })
}

let newsSwiper = new Swiper('.catalog_news', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.catalog_news__btn_next',
        prevEl: '.catalog_news__btn_prev',
    },
    pagination: {
        el: '.catalog_news__pagination',
        clickable: true,
    }
})

let catalogBrands = document.querySelectorAll('.catalog_brand');

if (catalogBrands.length) {
    catalogBrands.forEach(el => {
        let catalogSwiper = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 2,
            spaceBetween: 4,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                }
            },
            navigation: {
                nextEl: el.querySelector('.swiper_btn__next'),
                prevEl: el.querySelector('.swiper_btn__prev'),
            },
            pagination: {
                el: el.querySelector('.swiper_pagination'),
                clickable: true,
            }
        })
    })
}

let catalogOpen = document.querySelector('.catalog_filter__open');
let catalogClose = document.querySelector('.catalog_filter__close');
let catalogFilter = document.querySelector('.catalog_filter');

if (catalogOpen) {
    catalogOpen.onclick = () => {
        catalogFilter.classList.add('active');
    }

    catalogClose.onclick = () => {
        catalogFilter.classList.remove('active');
    }
}

let tabs = document.querySelectorAll('.tab');
if (tabs.length) {
    tabs.forEach(tab => {
        let tab_btns = tab.querySelectorAll('button');
        let tab_items = tab.querySelectorAll('.tab_item');
        tab_btns.forEach((tab_btn, btn_idx) => {
            tab_btn.onclick = () => {
                if (!tab_items[btn_idx].classList.contains('active')) {
                    tab_items.forEach((tab_item, item_idx) => {
                        if (tab_item.classList.contains('active')) {
                            tab_item.classList.remove('active');
                        }
                    })
                    tab_items[btn_idx].classList.add('active')
                }
                tab_btns.forEach(item => {
                    item.classList.remove('active')
                })
                tab_btn.classList.add('active')
            }
        })
    })
}

let productSelect = document.querySelectorAll('.product_select');

if (productSelect.length) {
    productSelect.forEach(el => {
        let btn = el.querySelector('.product_select__btn')
        let img = el.querySelector('.product_select__btn .main_img')
        let val = el.querySelector('.product_select__btn .value')
        let list = el.querySelectorAll('.product_select__list_item');

        btn.onclick = () => {
            el.classList.toggle('active');
        }

        list.forEach(b => {
            b.onclick = () => {
                el.classList.remove('active');
                val.textContent = b.textContent;
                img.setAttribute('src', b.querySelector('img').getAttribute('src'))

                list.forEach(b2 => {
                    if (b2 == b) {
                        b2.classList.add('active');
                    } else {
                        b2.classList.remove('active');
                    }
                })
            }
        })
    })
}