const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const modalGreet = document.querySelector(".modal-greetings");
const preloader = document.querySelector(".preloader");
window.addEventListener('load', () => {
    preloader.classList.add('hidden') 
    body.classList.remove('body-scroll') 
    // setTimeout(() => {
    //     modalGreet.classList.remove('hidden') 
    //     overlay.classList.remove('hidden')
    // },
    // 5000)
}) 
const navLinksBox = document.querySelector(".nav__list");
navLinksBox.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("nav__item-link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
        navLinksBox.classList.remove('nav__list-mobile') 
        nav.classList.remove('nav__mobile')
        body.classList.remove('body-scroll') 
        hamburger.classList.remove('hamspan')
    }
});
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('.nav');
hamburger.addEventListener("click", () => {
    nav.classList.toggle('nav__mobile') 
    navLinksBox.classList.toggle('nav__list-mobile') 
    hamburger.classList.toggle('hamspan') 
    body.classList.toggle('body-scroll')
});
const header = document.querySelector(".nav__container");
const firstSection = document.querySelector(".first-section");
function stickyHeader(entries) {
    const windowWidth = window.innerWidth 
    
    if (windowWidth < 991) {
        if (!entries[0].isIntersecting) {
            header.classList.add('sticky') 
            header.style.padding = '14px 14px'
        } else {
            header.classList.remove('sticky') 
            header.style.padding = '14px 0px'
        }
    }
}
const options = {
    threshold: 0,
}
const observer = new IntersectionObserver(stickyHeader, options) 
observer.observe(firstSection) 
const modal = document.querySelectorAll(".modal");
const modalClose = document.querySelectorAll(".modal__close");
modalClose.forEach(close => {
    close.addEventListener("click", () => {
        modal.forEach(m => {
            m.classList.add("hidden")
        }) 
        overlay.classList.add("hidden")
    })
}) 
overlay.addEventListener("click", () => {
    modal.forEach(m => {
        m.classList.add("hidden")
    }) 
    overlay.classList.add("hidden")
});
const btnToFirstSection = document.querySelectorAll(".btn-to-first-section");
btnToFirstSection.forEach(btn => {
    btn.addEventListener('click', () => {
        firstSection.scrollIntoView({
            behavior: 'smooth'
        })
    })
}) 

const swiperBox = document.querySelector('.swiper-container');
if (swiperBox) {
  const swiper = new Swiper(swiperBox, {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
  })

}

let inputs = document.querySelectorAll('input[type="tel"]');
let inputMask = new Inputmask("+7 (999) 999 99 99");
inputMask.mask(inputs);
const btnLogo = document.querySelector('.btn-main_show');
const chooseBox = document.querySelector('.choose');
let count = 1 
btnLogo.addEventListener('click', () => {
    chooseBox.classList.toggle('choose_height') 
    if (count === 1) {
        btnLogo.textContent = 'СКРЫТЬ'
        count++
    } else
    if (count === 2) {
        btnLogo.textContent = 'ПОКАЗАТЬ ЕЩЕ'
        count = 1
    }
}) 
const inputIconModalFirst = document.querySelector('.input-icon-modal-first') 
const mutObserverModalFirst = new MutationObserver((mutations) => {
    if (mutations[0].addedNodes) {
        inputIconModalFirst.classList.add('input-icon-red-modal')
    } else {
        inputIconModalFirst.classList.remove('input-icon-red-modal')
    }
}) 
mutObserverModalFirst.observe(inputIconModalFirst, {
    childList: !0
}) 
const inputIconModalSecond = document.querySelector('.input-icon-modal-second') 
const mutObserverModalSecond = new MutationObserver((mutations) => {
    if (mutations[0].addedNodes) {
        inputIconModalSecond.classList.add('input-icon-red-modal')
    } else {
        inputIconModalSecond.classList.remove('input-icon-red-modal')
    }
}) 
mutObserverModalSecond.observe(inputIconModalSecond, {
    childList: !0
}) 
const inputIconModalThird = document.querySelector('.input-icon-modal-third') 
const mutObserverModalThird = new MutationObserver((mutations) => {
    if (mutations[0].addedNodes) {
        inputIconModalThird.classList.add('input-icon-red-modal')
    } else {
        inputIconModalThird.classList.remove('input-icon-red-modal')
    }
}) 
mutObserverModalThird.observe(inputIconModalThird, {
    childList: !0
}) 
const modalSuccess = document.querySelector('.modal_success-click') 
new window.JustValidate('.form__modal', {
    rules: {
        tel: {
            required: !0,
            function: () => {
                const phone = document.querySelector('.modal__input-phone').value 
                const arr = []
                for (let i of phone) {
                    console.log(i) 
                    if (i != '_' && i != '+' && i != ' ' && i != '(' && i != ')') {
                        arr.push(i)
                    }
                }
                return arr.length === 11
            },
        },
    },
    colorWrong: "black",
    messages: {
        tel: {
            required: "Введите телефон",
            function: "Здесь должно быть 10 символов без +7",
        },
        name: {
            required: "Введите имя",
            minLength: "Введите 3 и более символов",
            maxLength: "Запрещено вводить более 15 символов",
        },
        email: {
            email: "Введите корректный email",
            required: "Введите email",
        },
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено')
                }
            }
        }
        xhr.open('POST', 'mail.php', !0);
        xhr.send(formData);
        thisForm.reset();
        if (inputIconModalFirst.classList.contains('input-icon-red-modal')) {
            inputIconModalFirst.classList.remove('input-icon-red-modal')
        }
        if (inputIconModalSecond.classList.contains('input-icon-red-modal')) {
            inputIconModalSecond.classList.remove('input-icon-red-modal')
        }
        if (inputIconModalThird.classList.contains('input-icon-red-modal')) {
            inputIconModalThird.classList.remove('input-icon-red-modal')
        }
        modalGreet.classList.add('hidden') 
        modalSuccess.classList.remove('hidden') 
        overlay.classList.remove('hidden')
    }
});
const modalPhoneFirst = document.querySelector('.modal_success-click') 
new window.JustValidate('.first-section__form', {
    rules: {
        tel: {
            required: !0,
            function: () => {
                const phone = document.querySelector('.first-section__input').value 
                const arr = []
                for (let i of phone) {
                    console.log(i) 
                    if (i != '_' && i != '+' && i != ' ' && i != '(' && i != ')') {
                        arr.push(i)
                    }
                }
                return arr.length === 11
            },
        },
    },
    colorWrong: "black",
    messages: {
        tel: {
            required: "Введите телефон",
            function: "Здесь должно быть 10 символов без +7",
        },
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено')
                }
            }
        }
        xhr.open('POST', 'mail.php', !0);
        xhr.send(formData);
        thisForm.reset();
        if (inputIconFirst.classList.contains('input-icon-red')) {
            inputIconFirst.classList.remove('input-icon-red')
        }
        modalPhoneFirst.classList.remove('hidden') 
        overlay.classList.remove('hidden')
    }
});
const inputIconFirst = document.querySelector('.input-icon-first') 
const mutObserverFirst = new MutationObserver((mutations) => {
    if (mutations[0].addedNodes) {
        inputIconFirst.classList.add('input-icon-red')
    } else {
        inputIconFirst.classList.remove('input-icon-red')
    }
}) 
mutObserverFirst.observe(inputIconFirst, {
    childList: !0
}) 
const modalSubs = document.querySelector('.modal_subs') 
new window.JustValidate('.eight-section__form', {
    colorWrong: "black",
    messages: {
        email: {
            email: "Введите корректный email",
            required: "Введите email",
        },
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено')
                }
            }
        }
        xhr.open('POST', 'mail.php', !0);
        xhr.send(formData);
        thisForm.reset();
        if (inputIconSecond.classList.contains('input-icon-red-second')) {
            inputIconSecond.classList.remove('input-icon-red-second')
        }
        modalSubs.classList.remove('hidden') 
        overlay.classList.remove('hidden')
    }
});
const inputIconSecond = document.querySelector('.input-icon-second') 
const mutObserverSecond = new MutationObserver((mutations) => {
    if (mutations[0].addedNodes) {
        inputIconSecond.classList.add('input-icon-red-second')
    } else {
        inputIconSecond.classList.remove('input-icon-red-second')
    }
}) 
mutObserverSecond.observe(inputIconSecond, {
    childList: !0
}) 
const modalPhoneThird = document.querySelector('.modal_success-click') 
new window.JustValidate('.ninth-section__form', {
    rules: {
        tel: {
            required: !0,
            function: () => {
                const phone = document.querySelector('.ninth-section__input').value 
                const arr = []
                for (let i of phone) {
                    console.log(i) 
                    if (i != '_' && i != '+' && i != ' ' && i != '(' && i != ')') {
                        arr.push(i)
                    }
                }
                return arr.length === 11
            },
        },
    },
    colorWrong: "black",
    messages: {
        tel: {
            required: "Введите телефон",
            function: "Здесь должно быть 10 символов без +7",
        },
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено')
                }
            }
        }
        xhr.open('POST', 'mail.php', !0);
        xhr.send(formData);
        thisForm.reset();
        if (inputIconThird.classList.contains('input-icon-red')) {
            inputIconThird.classList.remove('input-icon-red')
        }
        modalPhoneThird.classList.remove('hidden') 
        overlay.classList.remove('hidden')
    }
});
const inputIconThird = document.querySelector('.input-icon-third') 
const mutObserverThird = new MutationObserver((mutations) => {
    if (mutations[0].addedNodes) {
        inputIconThird.classList.add('input-icon-red')
    } else {
        inputIconThird.classList.remove('input-icon-red')
    }
}) 
mutObserverThird.observe(inputIconThird, {
    childList: !0
})
initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.621202, 55.753544],

                // Уровень масштабирования
                zoom: 13
            },
            mode: 'vector'
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer({
      customization: [
        {
            "tags": "country",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ad8585"
                },
                {
                    "opacity": 0.8,
                    "zoom": 0
                },
                {
                    "opacity": 0.8,
                    "zoom": 1
                },
                {
                    "opacity": 0.8,
                    "zoom": 2
                },
                {
                    "opacity": 0.8,
                    "zoom": 3
                },
                {
                    "opacity": 0.8,
                    "zoom": 4
                },
                {
                    "opacity": 1,
                    "zoom": 5
                },
                {
                    "opacity": 1,
                    "zoom": 6
                },
                {
                    "opacity": 1,
                    "zoom": 7
                },
                {
                    "opacity": 1,
                    "zoom": 8
                },
                {
                    "opacity": 1,
                    "zoom": 9
                },
                {
                    "opacity": 1,
                    "zoom": 10
                },
                {
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "country",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#cccccc"
                },
                {
                    "opacity": 0.15,
                    "zoom": 0
                },
                {
                    "opacity": 0.15,
                    "zoom": 1
                },
                {
                    "opacity": 0.15,
                    "zoom": 2
                },
                {
                    "opacity": 0.15,
                    "zoom": 3
                },
                {
                    "opacity": 0.15,
                    "zoom": 4
                },
                {
                    "opacity": 0.15,
                    "zoom": 5
                },
                {
                    "opacity": 0.25,
                    "zoom": 6
                },
                {
                    "opacity": 0.5,
                    "zoom": 7
                },
                {
                    "opacity": 0.47,
                    "zoom": 8
                },
                {
                    "opacity": 0.44,
                    "zoom": 9
                },
                {
                    "opacity": 0.41,
                    "zoom": 10
                },
                {
                    "opacity": 0.38,
                    "zoom": 11
                },
                {
                    "opacity": 0.35,
                    "zoom": 12
                },
                {
                    "opacity": 0.33,
                    "zoom": 13
                },
                {
                    "opacity": 0.3,
                    "zoom": 14
                },
                {
                    "opacity": 0.28,
                    "zoom": 15
                },
                {
                    "opacity": 0.25,
                    "zoom": 16
                },
                {
                    "opacity": 0.25,
                    "zoom": 17
                },
                {
                    "opacity": 0.25,
                    "zoom": 18
                },
                {
                    "opacity": 0.25,
                    "zoom": 19
                },
                {
                    "opacity": 0.25,
                    "zoom": 20
                },
                {
                    "opacity": 0.25,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "region",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#c2a3a3",
                    "opacity": 0.5,
                    "zoom": 0
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 0.5,
                    "zoom": 1
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 0.5,
                    "zoom": 2
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 0.5,
                    "zoom": 3
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 0.5,
                    "zoom": 4
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 0.5,
                    "zoom": 5
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 1,
                    "zoom": 6
                },
                {
                    "color": "#c2a3a3",
                    "opacity": 1,
                    "zoom": 7
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 8
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 9
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 10
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "color": "#ad8585",
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "region",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#cccccc"
                },
                {
                    "opacity": 0.15,
                    "zoom": 0
                },
                {
                    "opacity": 0.15,
                    "zoom": 1
                },
                {
                    "opacity": 0.15,
                    "zoom": 2
                },
                {
                    "opacity": 0.15,
                    "zoom": 3
                },
                {
                    "opacity": 0.15,
                    "zoom": 4
                },
                {
                    "opacity": 0.15,
                    "zoom": 5
                },
                {
                    "opacity": 0.25,
                    "zoom": 6
                },
                {
                    "opacity": 0.5,
                    "zoom": 7
                },
                {
                    "opacity": 0.47,
                    "zoom": 8
                },
                {
                    "opacity": 0.44,
                    "zoom": 9
                },
                {
                    "opacity": 0.41,
                    "zoom": 10
                },
                {
                    "opacity": 0.38,
                    "zoom": 11
                },
                {
                    "opacity": 0.35,
                    "zoom": 12
                },
                {
                    "opacity": 0.33,
                    "zoom": 13
                },
                {
                    "opacity": 0.3,
                    "zoom": 14
                },
                {
                    "opacity": 0.28,
                    "zoom": 15
                },
                {
                    "opacity": 0.25,
                    "zoom": 16
                },
                {
                    "opacity": 0.25,
                    "zoom": 17
                },
                {
                    "opacity": 0.25,
                    "zoom": 18
                },
                {
                    "opacity": 0.25,
                    "zoom": 19
                },
                {
                    "opacity": 0.25,
                    "zoom": 20
                },
                {
                    "opacity": 0.25,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ad8585"
                },
                {
                    "opacity": 0.5,
                    "zoom": 0
                },
                {
                    "opacity": 0.5,
                    "zoom": 1
                },
                {
                    "opacity": 0.5,
                    "zoom": 2
                },
                {
                    "opacity": 0.5,
                    "zoom": 3
                },
                {
                    "opacity": 0.5,
                    "zoom": 4
                },
                {
                    "opacity": 0.5,
                    "zoom": 5
                },
                {
                    "opacity": 1,
                    "zoom": 6
                },
                {
                    "opacity": 1,
                    "zoom": 7
                },
                {
                    "opacity": 1,
                    "zoom": 8
                },
                {
                    "opacity": 1,
                    "zoom": 9
                },
                {
                    "opacity": 1,
                    "zoom": 10
                },
                {
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#cccccc"
                },
                {
                    "opacity": 0.15,
                    "zoom": 0
                },
                {
                    "opacity": 0.15,
                    "zoom": 1
                },
                {
                    "opacity": 0.15,
                    "zoom": 2
                },
                {
                    "opacity": 0.15,
                    "zoom": 3
                },
                {
                    "opacity": 0.15,
                    "zoom": 4
                },
                {
                    "opacity": 0.15,
                    "zoom": 5
                },
                {
                    "opacity": 0.25,
                    "zoom": 6
                },
                {
                    "opacity": 0.5,
                    "zoom": 7
                },
                {
                    "opacity": 0.47,
                    "zoom": 8
                },
                {
                    "opacity": 0.44,
                    "zoom": 9
                },
                {
                    "opacity": 0.41,
                    "zoom": 10
                },
                {
                    "opacity": 0.38,
                    "zoom": 11
                },
                {
                    "opacity": 0.35,
                    "zoom": 12
                },
                {
                    "opacity": 0.33,
                    "zoom": 13
                },
                {
                    "opacity": 0.3,
                    "zoom": 14
                },
                {
                    "opacity": 0.28,
                    "zoom": 15
                },
                {
                    "opacity": 0.25,
                    "zoom": 16
                },
                {
                    "opacity": 0.25,
                    "zoom": 17
                },
                {
                    "opacity": 0.25,
                    "zoom": 18
                },
                {
                    "opacity": 0.25,
                    "zoom": 19
                },
                {
                    "opacity": 0.25,
                    "zoom": 20
                },
                {
                    "opacity": 0.25,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "landcover",
                "none": "vegetation"
            },
            "stylers": [
                {
                    "hue": "#dedede"
                }
            ]
        },
        {
            "tags": "vegetation",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#c4c4c4",
                    "opacity": 0.1,
                    "zoom": 0
                },
                {
                    "color": "#c4c4c4",
                    "opacity": 0.1,
                    "zoom": 1
                },
                {
                    "color": "#c4c4c4",
                    "opacity": 0.1,
                    "zoom": 2
                },
                {
                    "color": "#c4c4c4",
                    "opacity": 0.1,
                    "zoom": 3
                },
                {
                    "color": "#c4c4c4",
                    "opacity": 0.1,
                    "zoom": 4
                },
                {
                    "color": "#c4c4c4",
                    "opacity": 0.1,
                    "zoom": 5
                },
                {
                    "color": "#c4c4c4",
                    "opacity": 0.2,
                    "zoom": 6
                },
                {
                    "color": "#dedede",
                    "opacity": 0.3,
                    "zoom": 7
                },
                {
                    "color": "#dedede",
                    "opacity": 0.4,
                    "zoom": 8
                },
                {
                    "color": "#dedede",
                    "opacity": 0.6,
                    "zoom": 9
                },
                {
                    "color": "#dedede",
                    "opacity": 0.8,
                    "zoom": 10
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "color": "#e3e3e3",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "park",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 0
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 1
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 2
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 3
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 4
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 5
                },
                {
                    "color": "#dedede",
                    "opacity": 0.2,
                    "zoom": 6
                },
                {
                    "color": "#dedede",
                    "opacity": 0.3,
                    "zoom": 7
                },
                {
                    "color": "#dedede",
                    "opacity": 0.4,
                    "zoom": 8
                },
                {
                    "color": "#dedede",
                    "opacity": 0.6,
                    "zoom": 9
                },
                {
                    "color": "#dedede",
                    "opacity": 0.8,
                    "zoom": 10
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "color": "#e3e3e3",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.9,
                    "zoom": 16
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.8,
                    "zoom": 17
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 18
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 19
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 20
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "national_park",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 0
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 1
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 2
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 3
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 4
                },
                {
                    "color": "#dedede",
                    "opacity": 0.1,
                    "zoom": 5
                },
                {
                    "color": "#dedede",
                    "opacity": 0.2,
                    "zoom": 6
                },
                {
                    "color": "#dedede",
                    "opacity": 0.3,
                    "zoom": 7
                },
                {
                    "color": "#dedede",
                    "opacity": 0.4,
                    "zoom": 8
                },
                {
                    "color": "#dedede",
                    "opacity": 0.6,
                    "zoom": 9
                },
                {
                    "color": "#dedede",
                    "opacity": 0.8,
                    "zoom": 10
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "color": "#e3e3e3",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 16
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 17
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 18
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 19
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 20
                },
                {
                    "color": "#e8e8e8",
                    "opacity": 0.7,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#dedede",
                    "zoom": 0
                },
                {
                    "color": "#dedede",
                    "zoom": 1
                },
                {
                    "color": "#dedede",
                    "zoom": 2
                },
                {
                    "color": "#dedede",
                    "zoom": 3
                },
                {
                    "color": "#dedede",
                    "zoom": 4
                },
                {
                    "color": "#dedede",
                    "zoom": 5
                },
                {
                    "color": "#dedede",
                    "zoom": 6
                },
                {
                    "color": "#dedede",
                    "zoom": 7
                },
                {
                    "color": "#dedede",
                    "zoom": 8
                },
                {
                    "color": "#dedede",
                    "zoom": 9
                },
                {
                    "color": "#dedede",
                    "zoom": 10
                },
                {
                    "color": "#dedede",
                    "zoom": 11
                },
                {
                    "color": "#dedede",
                    "zoom": 12
                },
                {
                    "color": "#dedede",
                    "zoom": 13
                },
                {
                    "color": "#e3e3e3",
                    "zoom": 14
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 15
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 16
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 17
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 18
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 19
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 20
                },
                {
                    "color": "#e8e8e8",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "sports_ground",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 0
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 1
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 2
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 3
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 4
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 5
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 6
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 7
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 8
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 9
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 10
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 11
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 12
                },
                {
                    "color": "#d1d1d1",
                    "opacity": 0,
                    "zoom": 13
                },
                {
                    "color": "#d6d6d6",
                    "opacity": 0,
                    "zoom": 14
                },
                {
                    "color": "#dbdbdb",
                    "opacity": 0.5,
                    "zoom": 15
                },
                {
                    "color": "#dcdcdc",
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "color": "#dddddd",
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "color": "#dddddd",
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "color": "#dedede",
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "color": "#dfdfdf",
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "terrain",
            "elements": "geometry",
            "stylers": [
                {
                    "hue": "#ebebeb"
                },
                {
                    "opacity": 0.3,
                    "zoom": 0
                },
                {
                    "opacity": 0.3,
                    "zoom": 1
                },
                {
                    "opacity": 0.3,
                    "zoom": 2
                },
                {
                    "opacity": 0.3,
                    "zoom": 3
                },
                {
                    "opacity": 0.3,
                    "zoom": 4
                },
                {
                    "opacity": 0.35,
                    "zoom": 5
                },
                {
                    "opacity": 0.4,
                    "zoom": 6
                },
                {
                    "opacity": 0.6,
                    "zoom": 7
                },
                {
                    "opacity": 0.8,
                    "zoom": 8
                },
                {
                    "opacity": 0.9,
                    "zoom": 9
                },
                {
                    "opacity": 1,
                    "zoom": 10
                },
                {
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "geographic_line",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#858585"
                }
            ]
        },
        {
            "tags": "land",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#ebebeb",
                    "zoom": 0
                },
                {
                    "color": "#ebebeb",
                    "zoom": 1
                },
                {
                    "color": "#ebebeb",
                    "zoom": 2
                },
                {
                    "color": "#ebebeb",
                    "zoom": 3
                },
                {
                    "color": "#ebebeb",
                    "zoom": 4
                },
                {
                    "color": "#ededed",
                    "zoom": 5
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 6
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 7
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 8
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 9
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 10
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 11
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 12
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 13
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 14
                },
                {
                    "color": "#fafafa",
                    "zoom": 15
                },
                {
                    "color": "#fafafa",
                    "zoom": 16
                },
                {
                    "color": "#fbfbfb",
                    "zoom": 17
                },
                {
                    "color": "#fbfbfb",
                    "zoom": 18
                },
                {
                    "color": "#fbfbfb",
                    "zoom": 19
                },
                {
                    "color": "#fcfcfc",
                    "zoom": 20
                },
                {
                    "color": "#fcfcfc",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "residential",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 0
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 1
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 2
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 3
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 4
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 5
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 6
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 7
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "opacity": 0.5,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#f5f5f5",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#f6f6f6",
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "color": "#f7f7f7",
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "color": "#f7f7f7",
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "color": "#f8f8f8",
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "color": "#f9f9f9",
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#ebebeb",
                    "zoom": 0
                },
                {
                    "color": "#ebebeb",
                    "zoom": 1
                },
                {
                    "color": "#ebebeb",
                    "zoom": 2
                },
                {
                    "color": "#ebebeb",
                    "zoom": 3
                },
                {
                    "color": "#ebebeb",
                    "zoom": 4
                },
                {
                    "color": "#ebebeb",
                    "zoom": 5
                },
                {
                    "color": "#ebebeb",
                    "zoom": 6
                },
                {
                    "color": "#ebebeb",
                    "zoom": 7
                },
                {
                    "color": "#ebebeb",
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 14
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 15
                },
                {
                    "color": "#f6f6f6",
                    "zoom": 16
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 17
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 18
                },
                {
                    "color": "#f8f8f8",
                    "zoom": 19
                },
                {
                    "color": "#f9f9f9",
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "structure",
                "none": [
                    "building",
                    "fence"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "opacity": 0.9
                },
                {
                    "color": "#ebebeb",
                    "zoom": 0
                },
                {
                    "color": "#ebebeb",
                    "zoom": 1
                },
                {
                    "color": "#ebebeb",
                    "zoom": 2
                },
                {
                    "color": "#ebebeb",
                    "zoom": 3
                },
                {
                    "color": "#ebebeb",
                    "zoom": 4
                },
                {
                    "color": "#ebebeb",
                    "zoom": 5
                },
                {
                    "color": "#ebebeb",
                    "zoom": 6
                },
                {
                    "color": "#ebebeb",
                    "zoom": 7
                },
                {
                    "color": "#ebebeb",
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 14
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 15
                },
                {
                    "color": "#f6f6f6",
                    "zoom": 16
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 17
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 18
                },
                {
                    "color": "#f8f8f8",
                    "zoom": 19
                },
                {
                    "color": "#f9f9f9",
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "building",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#e0e0e0"
                },
                {
                    "opacity": 0.7,
                    "zoom": 0
                },
                {
                    "opacity": 0.7,
                    "zoom": 1
                },
                {
                    "opacity": 0.7,
                    "zoom": 2
                },
                {
                    "opacity": 0.7,
                    "zoom": 3
                },
                {
                    "opacity": 0.7,
                    "zoom": 4
                },
                {
                    "opacity": 0.7,
                    "zoom": 5
                },
                {
                    "opacity": 0.7,
                    "zoom": 6
                },
                {
                    "opacity": 0.7,
                    "zoom": 7
                },
                {
                    "opacity": 0.7,
                    "zoom": 8
                },
                {
                    "opacity": 0.7,
                    "zoom": 9
                },
                {
                    "opacity": 0.7,
                    "zoom": 10
                },
                {
                    "opacity": 0.7,
                    "zoom": 11
                },
                {
                    "opacity": 0.7,
                    "zoom": 12
                },
                {
                    "opacity": 0.7,
                    "zoom": 13
                },
                {
                    "opacity": 0.7,
                    "zoom": 14
                },
                {
                    "opacity": 0.7,
                    "zoom": 15
                },
                {
                    "opacity": 0.9,
                    "zoom": 16
                },
                {
                    "opacity": 0.6,
                    "zoom": 17
                },
                {
                    "opacity": 0.6,
                    "zoom": 18
                },
                {
                    "opacity": 0.6,
                    "zoom": 19
                },
                {
                    "opacity": 0.6,
                    "zoom": 20
                },
                {
                    "opacity": 0.6,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "building",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#cccccc"
                },
                {
                    "opacity": 0.5,
                    "zoom": 0
                },
                {
                    "opacity": 0.5,
                    "zoom": 1
                },
                {
                    "opacity": 0.5,
                    "zoom": 2
                },
                {
                    "opacity": 0.5,
                    "zoom": 3
                },
                {
                    "opacity": 0.5,
                    "zoom": 4
                },
                {
                    "opacity": 0.5,
                    "zoom": 5
                },
                {
                    "opacity": 0.5,
                    "zoom": 6
                },
                {
                    "opacity": 0.5,
                    "zoom": 7
                },
                {
                    "opacity": 0.5,
                    "zoom": 8
                },
                {
                    "opacity": 0.5,
                    "zoom": 9
                },
                {
                    "opacity": 0.5,
                    "zoom": 10
                },
                {
                    "opacity": 0.5,
                    "zoom": 11
                },
                {
                    "opacity": 0.5,
                    "zoom": 12
                },
                {
                    "opacity": 0.5,
                    "zoom": 13
                },
                {
                    "opacity": 0.5,
                    "zoom": 14
                },
                {
                    "opacity": 0.5,
                    "zoom": 15
                },
                {
                    "opacity": 0.5,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "urban_area",
                "none": [
                    "residential",
                    "industrial",
                    "cemetery",
                    "park",
                    "medical",
                    "sports_ground",
                    "beach",
                    "construction_site"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 0
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 1
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 2
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 3
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 4
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 5
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 6
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 7
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 8
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 9
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 10
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "color": "#e0e0e0",
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#ededed",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#f3f3f3",
                    "opacity": 0.67,
                    "zoom": 16
                },
                {
                    "color": "#fafafa",
                    "opacity": 0.33,
                    "zoom": 17
                },
                {
                    "color": "#fafafa",
                    "opacity": 0,
                    "zoom": 18
                },
                {
                    "color": "#fafafa",
                    "opacity": 0,
                    "zoom": 19
                },
                {
                    "color": "#fafafa",
                    "opacity": 0,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "opacity": 0,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "poi",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "poi",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "poi",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "outdoor",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "outdoor",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "outdoor",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "park",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "park",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "park",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "shopping",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "shopping",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "shopping",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "commercial_services",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "commercial_services",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "commercial_services",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "food_and_drink",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "food_and_drink",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d"
                }
            ]
        },
        {
            "tags": "food_and_drink",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.icon",
            "types": "point",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "tertiary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.fill",
            "types": "point",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "tags": "entrance",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                },
                {
                    "hue": "#808080"
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "secondary-color": "#ffffff"
                }
            ]
        },
        {
            "tags": "country",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "opacity": 0.8
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "tags": "country",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "region",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#737373"
                },
                {
                    "opacity": 0.8
                }
            ]
        },
        {
            "tags": "region",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "district",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#737373"
                },
                {
                    "opacity": 0.8
                }
            ]
        },
        {
            "tags": "district",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#4d4d4d",
                    "zoom": 0
                },
                {
                    "color": "#4d4d4d",
                    "zoom": 1
                },
                {
                    "color": "#4d4d4d",
                    "zoom": 2
                },
                {
                    "color": "#4d4d4d",
                    "zoom": 3
                },
                {
                    "color": "#4d4d4d",
                    "zoom": 4
                },
                {
                    "color": "#4b4b4b",
                    "zoom": 5
                },
                {
                    "color": "#494949",
                    "zoom": 6
                },
                {
                    "color": "#474747",
                    "zoom": 7
                },
                {
                    "color": "#444444",
                    "zoom": 8
                },
                {
                    "color": "#424242",
                    "zoom": 9
                },
                {
                    "color": "#404040",
                    "zoom": 10
                },
                {
                    "color": "#404040",
                    "zoom": 11
                },
                {
                    "color": "#404040",
                    "zoom": 12
                },
                {
                    "color": "#404040",
                    "zoom": 13
                },
                {
                    "color": "#404040",
                    "zoom": 14
                },
                {
                    "color": "#404040",
                    "zoom": 15
                },
                {
                    "color": "#404040",
                    "zoom": 16
                },
                {
                    "color": "#404040",
                    "zoom": 17
                },
                {
                    "color": "#404040",
                    "zoom": 18
                },
                {
                    "color": "#404040",
                    "zoom": 19
                },
                {
                    "color": "#404040",
                    "zoom": 20
                },
                {
                    "color": "#404040",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.fill",
            "types": "polyline",
            "stylers": [
                {
                    "color": "#595959"
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.outline",
            "types": "polyline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "road",
            "elements": "geometry.fill.pattern",
            "types": "polyline",
            "stylers": [
                {
                    "scale": 1
                },
                {
                    "color": "#8c8c8c"
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.fill",
            "types": "point",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "tags": "structure",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#666666"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "structure",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "address",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#666666"
                },
                {
                    "opacity": 0.9,
                    "zoom": 0
                },
                {
                    "opacity": 0.9,
                    "zoom": 1
                },
                {
                    "opacity": 0.9,
                    "zoom": 2
                },
                {
                    "opacity": 0.9,
                    "zoom": 3
                },
                {
                    "opacity": 0.9,
                    "zoom": 4
                },
                {
                    "opacity": 0.9,
                    "zoom": 5
                },
                {
                    "opacity": 0.9,
                    "zoom": 6
                },
                {
                    "opacity": 0.9,
                    "zoom": 7
                },
                {
                    "opacity": 0.9,
                    "zoom": 8
                },
                {
                    "opacity": 0.9,
                    "zoom": 9
                },
                {
                    "opacity": 0.9,
                    "zoom": 10
                },
                {
                    "opacity": 0.9,
                    "zoom": 11
                },
                {
                    "opacity": 0.9,
                    "zoom": 12
                },
                {
                    "opacity": 0.9,
                    "zoom": 13
                },
                {
                    "opacity": 0.9,
                    "zoom": 14
                },
                {
                    "opacity": 0.9,
                    "zoom": 15
                },
                {
                    "opacity": 0.9,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "address",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "landscape",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#737373",
                    "opacity": 1,
                    "zoom": 0
                },
                {
                    "color": "#737373",
                    "opacity": 1,
                    "zoom": 1
                },
                {
                    "color": "#737373",
                    "opacity": 1,
                    "zoom": 2
                },
                {
                    "color": "#737373",
                    "opacity": 1,
                    "zoom": 3
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 4
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 5
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 6
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 7
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 8
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 9
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 10
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 11
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 12
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 13
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 14
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 15
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 16
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 17
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 18
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 19
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 20
                },
                {
                    "color": "#666666",
                    "opacity": 0.5,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "landscape",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.5,
                    "zoom": 0
                },
                {
                    "opacity": 0.5,
                    "zoom": 1
                },
                {
                    "opacity": 0.5,
                    "zoom": 2
                },
                {
                    "opacity": 0.5,
                    "zoom": 3
                },
                {
                    "opacity": 0,
                    "zoom": 4
                },
                {
                    "opacity": 0,
                    "zoom": 5
                },
                {
                    "opacity": 0,
                    "zoom": 6
                },
                {
                    "opacity": 0,
                    "zoom": 7
                },
                {
                    "opacity": 0,
                    "zoom": 8
                },
                {
                    "opacity": 0,
                    "zoom": 9
                },
                {
                    "opacity": 0,
                    "zoom": 10
                },
                {
                    "opacity": 0,
                    "zoom": 11
                },
                {
                    "opacity": 0,
                    "zoom": 12
                },
                {
                    "opacity": 0,
                    "zoom": 13
                },
                {
                    "opacity": 0,
                    "zoom": 14
                },
                {
                    "opacity": 0,
                    "zoom": 15
                },
                {
                    "opacity": 0,
                    "zoom": 16
                },
                {
                    "opacity": 0,
                    "zoom": 17
                },
                {
                    "opacity": 0,
                    "zoom": 18
                },
                {
                    "opacity": 0,
                    "zoom": 19
                },
                {
                    "opacity": 0,
                    "zoom": 20
                },
                {
                    "opacity": 0,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "water",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "opacity": 0.8
                }
            ]
        },
        {
            "tags": "water",
            "elements": "label.text.outline",
            "types": "polyline",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "opacity": 0.2
                }
            ]
        },
        {
            "tags": {
                "any": "road_1",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 2.97,
                    "zoom": 6
                },
                {
                    "scale": 3.19,
                    "zoom": 7
                },
                {
                    "scale": 3.53,
                    "zoom": 8
                },
                {
                    "scale": 4,
                    "zoom": 9
                },
                {
                    "scale": 3.61,
                    "zoom": 10
                },
                {
                    "scale": 3.06,
                    "zoom": 11
                },
                {
                    "scale": 2.64,
                    "zoom": 12
                },
                {
                    "scale": 2.27,
                    "zoom": 13
                },
                {
                    "scale": 2.03,
                    "zoom": 14
                },
                {
                    "scale": 1.9,
                    "zoom": 15
                },
                {
                    "scale": 1.86,
                    "zoom": 16
                },
                {
                    "scale": 1.48,
                    "zoom": 17
                },
                {
                    "scale": 1.21,
                    "zoom": 18
                },
                {
                    "scale": 1.04,
                    "zoom": 19
                },
                {
                    "scale": 0.94,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_1"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#00000000",
                    "scale": 3.05,
                    "zoom": 6
                },
                {
                    "color": "#00000000",
                    "scale": 3.05,
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "scale": 3.15,
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "scale": 3.37,
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "scale": 3.36,
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "scale": 3.17,
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "scale": 3,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "scale": 2.8,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 2.66,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 2.61,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 2.64,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 2.14,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.79,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.55,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.41,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.35,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_2",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 2.97,
                    "zoom": 6
                },
                {
                    "scale": 3.19,
                    "zoom": 7
                },
                {
                    "scale": 3.53,
                    "zoom": 8
                },
                {
                    "scale": 4,
                    "zoom": 9
                },
                {
                    "scale": 3.61,
                    "zoom": 10
                },
                {
                    "scale": 3.06,
                    "zoom": 11
                },
                {
                    "scale": 2.64,
                    "zoom": 12
                },
                {
                    "scale": 2.27,
                    "zoom": 13
                },
                {
                    "scale": 2.03,
                    "zoom": 14
                },
                {
                    "scale": 1.9,
                    "zoom": 15
                },
                {
                    "scale": 1.86,
                    "zoom": 16
                },
                {
                    "scale": 1.48,
                    "zoom": 17
                },
                {
                    "scale": 1.21,
                    "zoom": 18
                },
                {
                    "scale": 1.04,
                    "zoom": 19
                },
                {
                    "scale": 0.94,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_2"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#00000000",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#00000000",
                    "scale": 3.05,
                    "zoom": 6
                },
                {
                    "color": "#00000000",
                    "scale": 3.05,
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "scale": 3.15,
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "scale": 3.37,
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "scale": 3.36,
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "scale": 3.17,
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "scale": 3,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "scale": 2.8,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 2.66,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 2.61,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 2.64,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 2.14,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.79,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.55,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.41,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.35,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_3",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 2.51,
                    "zoom": 9
                },
                {
                    "scale": 2.62,
                    "zoom": 10
                },
                {
                    "scale": 1.68,
                    "zoom": 11
                },
                {
                    "scale": 1.67,
                    "zoom": 12
                },
                {
                    "scale": 1.38,
                    "zoom": 13
                },
                {
                    "scale": 1.19,
                    "zoom": 14
                },
                {
                    "scale": 1.08,
                    "zoom": 15
                },
                {
                    "scale": 1.04,
                    "zoom": 16
                },
                {
                    "scale": 0.91,
                    "zoom": 17
                },
                {
                    "scale": 0.84,
                    "zoom": 18
                },
                {
                    "scale": 0.82,
                    "zoom": 19
                },
                {
                    "scale": 0.84,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_3"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 1.6,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 1.29,
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "scale": 4.21,
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "scale": 2.74,
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "scale": 2.04,
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "scale": 2.13,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.88,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.7,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.59,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.55,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.37,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.27,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.23,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.26,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.35,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_4",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 1.69,
                    "zoom": 10
                },
                {
                    "scale": 1.26,
                    "zoom": 11
                },
                {
                    "scale": 1.41,
                    "zoom": 12
                },
                {
                    "scale": 1.19,
                    "zoom": 13
                },
                {
                    "scale": 1.04,
                    "zoom": 14
                },
                {
                    "scale": 0.97,
                    "zoom": 15
                },
                {
                    "scale": 1.15,
                    "zoom": 16
                },
                {
                    "scale": 0.99,
                    "zoom": 17
                },
                {
                    "scale": 0.89,
                    "zoom": 18
                },
                {
                    "scale": 0.85,
                    "zoom": 19
                },
                {
                    "scale": 0.85,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_4"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 1.12,
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.9,
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.62,
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.83,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.64,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.51,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.44,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.69,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.47,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.34,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.28,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.28,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.34,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_5",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 0,
                    "zoom": 10
                },
                {
                    "scale": 0,
                    "zoom": 11
                },
                {
                    "scale": 1.25,
                    "zoom": 12
                },
                {
                    "scale": 0.95,
                    "zoom": 13
                },
                {
                    "scale": 0.81,
                    "zoom": 14
                },
                {
                    "scale": 0.95,
                    "zoom": 15
                },
                {
                    "scale": 1.1,
                    "zoom": 16
                },
                {
                    "scale": 0.93,
                    "zoom": 17
                },
                {
                    "scale": 0.85,
                    "zoom": 18
                },
                {
                    "scale": 0.82,
                    "zoom": 19
                },
                {
                    "scale": 0.84,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_5"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 9
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 10
                },
                {
                    "color": "#ffffff",
                    "scale": 0.62,
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.61,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "scale": 1.36,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.22,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.41,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.63,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.4,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.27,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.23,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.25,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.34,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_6",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 0,
                    "zoom": 10
                },
                {
                    "scale": 0,
                    "zoom": 11
                },
                {
                    "scale": 0,
                    "zoom": 12
                },
                {
                    "scale": 2.25,
                    "zoom": 13
                },
                {
                    "scale": 1.27,
                    "zoom": 14
                },
                {
                    "scale": 1.25,
                    "zoom": 15
                },
                {
                    "scale": 1.31,
                    "zoom": 16
                },
                {
                    "scale": 1.04,
                    "zoom": 17
                },
                {
                    "scale": 0.9,
                    "zoom": 18
                },
                {
                    "scale": 0.85,
                    "zoom": 19
                },
                {
                    "scale": 0.85,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_6"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 9
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 10
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 11
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "scale": 2.31,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.7,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.76,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.89,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.55,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.36,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.27,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.27,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.34,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_7",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 0,
                    "zoom": 10
                },
                {
                    "scale": 0,
                    "zoom": 11
                },
                {
                    "scale": 0,
                    "zoom": 12
                },
                {
                    "scale": 0,
                    "zoom": 13
                },
                {
                    "scale": 0.9,
                    "zoom": 14
                },
                {
                    "scale": 0.78,
                    "zoom": 15
                },
                {
                    "scale": 0.88,
                    "zoom": 16
                },
                {
                    "scale": 0.8,
                    "zoom": 17
                },
                {
                    "scale": 0.78,
                    "zoom": 18
                },
                {
                    "scale": 0.79,
                    "zoom": 19
                },
                {
                    "scale": 0.83,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_7"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 9
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 10
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 11
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 12
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.31,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 1.19,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.31,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.21,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.17,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.18,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.23,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.33,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_minor",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 0,
                    "zoom": 10
                },
                {
                    "scale": 0,
                    "zoom": 11
                },
                {
                    "scale": 0,
                    "zoom": 12
                },
                {
                    "scale": 0,
                    "zoom": 13
                },
                {
                    "scale": 0,
                    "zoom": 14
                },
                {
                    "scale": 0,
                    "zoom": 15
                },
                {
                    "scale": 0.9,
                    "zoom": 16
                },
                {
                    "scale": 0.9,
                    "zoom": 17
                },
                {
                    "scale": 0.9,
                    "zoom": 18
                },
                {
                    "scale": 0.9,
                    "zoom": 19
                },
                {
                    "scale": 0.9,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_minor"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 9
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 10
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 11
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 12
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 0.4,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 0.4,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.4,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.27,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.27,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.29,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.31,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.32,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_unclassified",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 0,
                    "zoom": 10
                },
                {
                    "scale": 0,
                    "zoom": 11
                },
                {
                    "scale": 0,
                    "zoom": 12
                },
                {
                    "scale": 0,
                    "zoom": 13
                },
                {
                    "scale": 0,
                    "zoom": 14
                },
                {
                    "scale": 0,
                    "zoom": 15
                },
                {
                    "scale": 0.9,
                    "zoom": 16
                },
                {
                    "scale": 0.9,
                    "zoom": 17
                },
                {
                    "scale": 0.9,
                    "zoom": 18
                },
                {
                    "scale": 0.9,
                    "zoom": 19
                },
                {
                    "scale": 0.9,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "road_unclassified"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 9
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 10
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 11
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 12
                },
                {
                    "color": "#ffffff",
                    "scale": 0.4,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 0.4,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 0.4,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 1.4,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 1.27,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 1.27,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.29,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.31,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.32,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "all": "is_tunnel",
                "none": "path"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#e6e6e6",
                    "zoom": 0
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 1
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 2
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 3
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 4
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 5
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 6
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 8
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 9
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 10
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 11
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 12
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 13
                },
                {
                    "color": "#ebebeb",
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 15
                },
                {
                    "color": "#f1f1f1",
                    "zoom": 16
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 17
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 18
                },
                {
                    "color": "#f3f3f3",
                    "zoom": 19
                },
                {
                    "color": "#f4f4f4",
                    "zoom": 20
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "all": "path",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#bfbfbf"
                }
            ]
        },
        {
            "tags": {
                "all": "path",
                "none": "is_tunnel"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0.7
                },
                {
                    "color": "#ebebeb",
                    "zoom": 0
                },
                {
                    "color": "#ebebeb",
                    "zoom": 1
                },
                {
                    "color": "#ebebeb",
                    "zoom": 2
                },
                {
                    "color": "#ebebeb",
                    "zoom": 3
                },
                {
                    "color": "#ebebeb",
                    "zoom": 4
                },
                {
                    "color": "#ebebeb",
                    "zoom": 5
                },
                {
                    "color": "#ebebeb",
                    "zoom": 6
                },
                {
                    "color": "#ebebeb",
                    "zoom": 7
                },
                {
                    "color": "#ebebeb",
                    "zoom": 8
                },
                {
                    "color": "#ebebeb",
                    "zoom": 9
                },
                {
                    "color": "#ebebeb",
                    "zoom": 10
                },
                {
                    "color": "#ebebeb",
                    "zoom": 11
                },
                {
                    "color": "#ebebeb",
                    "zoom": 12
                },
                {
                    "color": "#ebebeb",
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 14
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 15
                },
                {
                    "color": "#f6f6f6",
                    "zoom": 16
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 17
                },
                {
                    "color": "#f7f7f7",
                    "zoom": 18
                },
                {
                    "color": "#f8f8f8",
                    "zoom": 19
                },
                {
                    "color": "#f9f9f9",
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "road_construction",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "tags": "road_construction",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#d9d9d9",
                    "zoom": 0
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 1
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 2
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 3
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 4
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 5
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 6
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 7
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 8
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 9
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 10
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 11
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 12
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 13
                },
                {
                    "color": "#bfbfbf",
                    "zoom": 14
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 15
                },
                {
                    "color": "#dddddd",
                    "zoom": 16
                },
                {
                    "color": "#e1e1e1",
                    "zoom": 17
                },
                {
                    "color": "#e5e5e5",
                    "zoom": 18
                },
                {
                    "color": "#eaeaea",
                    "zoom": 19
                },
                {
                    "color": "#eeeeee",
                    "zoom": 20
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "ferry"
            },
            "stylers": [
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "tags": "transit_location",
            "elements": "label.icon",
            "stylers": [
                {
                    "hue": "#808080"
                },
                {
                    "saturation": -1
                }
            ]
        },
        {
            "tags": "transit_location",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#b87a7a"
                }
            ]
        },
        {
            "tags": "transit_location",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "tags": "transit_schema",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#b87a7a"
                },
                {
                    "scale": 0.7
                },
                {
                    "opacity": 0.6,
                    "zoom": 0
                },
                {
                    "opacity": 0.6,
                    "zoom": 1
                },
                {
                    "opacity": 0.6,
                    "zoom": 2
                },
                {
                    "opacity": 0.6,
                    "zoom": 3
                },
                {
                    "opacity": 0.6,
                    "zoom": 4
                },
                {
                    "opacity": 0.6,
                    "zoom": 5
                },
                {
                    "opacity": 0.6,
                    "zoom": 6
                },
                {
                    "opacity": 0.6,
                    "zoom": 7
                },
                {
                    "opacity": 0.6,
                    "zoom": 8
                },
                {
                    "opacity": 0.6,
                    "zoom": 9
                },
                {
                    "opacity": 0.6,
                    "zoom": 10
                },
                {
                    "opacity": 0.6,
                    "zoom": 11
                },
                {
                    "opacity": 0.6,
                    "zoom": 12
                },
                {
                    "opacity": 0.6,
                    "zoom": 13
                },
                {
                    "opacity": 0.6,
                    "zoom": 14
                },
                {
                    "opacity": 0.5,
                    "zoom": 15
                },
                {
                    "opacity": 0.4,
                    "zoom": 16
                },
                {
                    "opacity": 0.4,
                    "zoom": 17
                },
                {
                    "opacity": 0.4,
                    "zoom": 18
                },
                {
                    "opacity": 0.4,
                    "zoom": 19
                },
                {
                    "opacity": 0.4,
                    "zoom": 20
                },
                {
                    "opacity": 0.4,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "transit_schema",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0
                }
            ]
        },
        {
            "tags": "transit_line",
            "elements": "geometry.fill.pattern",
            "stylers": [
                {
                    "color": "#c2a3a3"
                },
                {
                    "opacity": 0,
                    "zoom": 0
                },
                {
                    "opacity": 0,
                    "zoom": 1
                },
                {
                    "opacity": 0,
                    "zoom": 2
                },
                {
                    "opacity": 0,
                    "zoom": 3
                },
                {
                    "opacity": 0,
                    "zoom": 4
                },
                {
                    "opacity": 0,
                    "zoom": 5
                },
                {
                    "opacity": 0,
                    "zoom": 6
                },
                {
                    "opacity": 0,
                    "zoom": 7
                },
                {
                    "opacity": 0,
                    "zoom": 8
                },
                {
                    "opacity": 0,
                    "zoom": 9
                },
                {
                    "opacity": 0,
                    "zoom": 10
                },
                {
                    "opacity": 0,
                    "zoom": 11
                },
                {
                    "opacity": 0,
                    "zoom": 12
                },
                {
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "transit_line",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#c2a3a3"
                },
                {
                    "scale": 0.4
                },
                {
                    "opacity": 0,
                    "zoom": 0
                },
                {
                    "opacity": 0,
                    "zoom": 1
                },
                {
                    "opacity": 0,
                    "zoom": 2
                },
                {
                    "opacity": 0,
                    "zoom": 3
                },
                {
                    "opacity": 0,
                    "zoom": 4
                },
                {
                    "opacity": 0,
                    "zoom": 5
                },
                {
                    "opacity": 0,
                    "zoom": 6
                },
                {
                    "opacity": 0,
                    "zoom": 7
                },
                {
                    "opacity": 0,
                    "zoom": 8
                },
                {
                    "opacity": 0,
                    "zoom": 9
                },
                {
                    "opacity": 0,
                    "zoom": 10
                },
                {
                    "opacity": 0,
                    "zoom": 11
                },
                {
                    "opacity": 0,
                    "zoom": 12
                },
                {
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "water",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#cccccc",
                    "zoom": 0
                },
                {
                    "color": "#cccccc",
                    "zoom": 1
                },
                {
                    "color": "#cccccc",
                    "zoom": 2
                },
                {
                    "color": "#cccccc",
                    "zoom": 3
                },
                {
                    "color": "#cccccc",
                    "zoom": 4
                },
                {
                    "color": "#cccccc",
                    "zoom": 5
                },
                {
                    "color": "#cccccc",
                    "zoom": 6
                },
                {
                    "color": "#cccccc",
                    "zoom": 7
                },
                {
                    "color": "#cecece",
                    "zoom": 8
                },
                {
                    "color": "#cfcfcf",
                    "zoom": 9
                },
                {
                    "color": "#d1d1d1",
                    "zoom": 10
                },
                {
                    "color": "#d2d2d2",
                    "zoom": 11
                },
                {
                    "color": "#d3d3d3",
                    "zoom": 12
                },
                {
                    "color": "#d4d4d4",
                    "zoom": 13
                },
                {
                    "color": "#d5d5d5",
                    "zoom": 14
                },
                {
                    "color": "#d6d6d6",
                    "zoom": 15
                },
                {
                    "color": "#d8d8d8",
                    "zoom": 16
                },
                {
                    "color": "#d9d9d9",
                    "zoom": 17
                },
                {
                    "color": "#dadada",
                    "zoom": 18
                },
                {
                    "color": "#dbdbdb",
                    "zoom": 19
                },
                {
                    "color": "#dddddd",
                    "zoom": 20
                },
                {
                    "color": "#dedede",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "water",
            "elements": "geometry",
            "types": "polyline",
            "stylers": [
                {
                    "opacity": 0.4,
                    "zoom": 0
                },
                {
                    "opacity": 0.4,
                    "zoom": 1
                },
                {
                    "opacity": 0.4,
                    "zoom": 2
                },
                {
                    "opacity": 0.4,
                    "zoom": 3
                },
                {
                    "opacity": 0.6,
                    "zoom": 4
                },
                {
                    "opacity": 0.8,
                    "zoom": 5
                },
                {
                    "opacity": 1,
                    "zoom": 6
                },
                {
                    "opacity": 1,
                    "zoom": 7
                },
                {
                    "opacity": 1,
                    "zoom": 8
                },
                {
                    "opacity": 1,
                    "zoom": 9
                },
                {
                    "opacity": 1,
                    "zoom": 10
                },
                {
                    "opacity": 1,
                    "zoom": 11
                },
                {
                    "opacity": 1,
                    "zoom": 12
                },
                {
                    "opacity": 1,
                    "zoom": 13
                },
                {
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "bathymetry",
            "elements": "geometry",
            "stylers": [
                {
                    "hue": "#cccccc"
                }
            ]
        },
        {
            "tags": {
                "any": [
                    "industrial",
                    "construction_site"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#e6e6e6",
                    "zoom": 0
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 1
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 2
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 3
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 4
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 5
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 6
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 8
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 9
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 10
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 11
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 12
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 13
                },
                {
                    "color": "#ebebeb",
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 15
                },
                {
                    "color": "#f1f1f1",
                    "zoom": 16
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 17
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 18
                },
                {
                    "color": "#f3f3f3",
                    "zoom": 19
                },
                {
                    "color": "#f4f4f4",
                    "zoom": 20
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "transit",
                "none": [
                    "transit_location",
                    "transit_line",
                    "transit_schema",
                    "is_unclassified_transit"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#e6e6e6",
                    "zoom": 0
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 1
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 2
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 3
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 4
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 5
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 6
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 8
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 9
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 10
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 11
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 12
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 13
                },
                {
                    "color": "#ebebeb",
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 15
                },
                {
                    "color": "#f1f1f1",
                    "zoom": 16
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 17
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 18
                },
                {
                    "color": "#f3f3f3",
                    "zoom": 19
                },
                {
                    "color": "#f4f4f4",
                    "zoom": 20
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "fence",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#dbdbdb"
                },
                {
                    "opacity": 0.75,
                    "zoom": 0
                },
                {
                    "opacity": 0.75,
                    "zoom": 1
                },
                {
                    "opacity": 0.75,
                    "zoom": 2
                },
                {
                    "opacity": 0.75,
                    "zoom": 3
                },
                {
                    "opacity": 0.75,
                    "zoom": 4
                },
                {
                    "opacity": 0.75,
                    "zoom": 5
                },
                {
                    "opacity": 0.75,
                    "zoom": 6
                },
                {
                    "opacity": 0.75,
                    "zoom": 7
                },
                {
                    "opacity": 0.75,
                    "zoom": 8
                },
                {
                    "opacity": 0.75,
                    "zoom": 9
                },
                {
                    "opacity": 0.75,
                    "zoom": 10
                },
                {
                    "opacity": 0.75,
                    "zoom": 11
                },
                {
                    "opacity": 0.75,
                    "zoom": 12
                },
                {
                    "opacity": 0.75,
                    "zoom": 13
                },
                {
                    "opacity": 0.75,
                    "zoom": 14
                },
                {
                    "opacity": 0.75,
                    "zoom": 15
                },
                {
                    "opacity": 0.75,
                    "zoom": 16
                },
                {
                    "opacity": 0.45,
                    "zoom": 17
                },
                {
                    "opacity": 0.45,
                    "zoom": 18
                },
                {
                    "opacity": 0.45,
                    "zoom": 19
                },
                {
                    "opacity": 0.45,
                    "zoom": 20
                },
                {
                    "opacity": 0.45,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#e6e6e6",
                    "zoom": 0
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 1
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 2
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 3
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 4
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 5
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 6
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 8
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 9
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 10
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 11
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 12
                },
                {
                    "color": "#e6e6e6",
                    "zoom": 13
                },
                {
                    "color": "#ebebeb",
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "zoom": 15
                },
                {
                    "color": "#f1f1f1",
                    "zoom": 16
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 17
                },
                {
                    "color": "#f2f2f2",
                    "zoom": 18
                },
                {
                    "color": "#f3f3f3",
                    "zoom": 19
                },
                {
                    "color": "#f4f4f4",
                    "zoom": 20
                },
                {
                    "color": "#f5f5f5",
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 0
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 1
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 2
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 3
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 4
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 5
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 6
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 7
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 8
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 9
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 10
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 11
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.3,
                    "zoom": 12
                },
                {
                    "color": "#e6e6e6",
                    "opacity": 0.65,
                    "zoom": 13
                },
                {
                    "color": "#ebebeb",
                    "opacity": 1,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "opacity": 1,
                    "zoom": 15
                },
                {
                    "color": "#f1f1f1",
                    "opacity": 1,
                    "zoom": 16
                },
                {
                    "color": "#f2f2f2",
                    "opacity": 1,
                    "zoom": 17
                },
                {
                    "color": "#f2f2f2",
                    "opacity": 1,
                    "zoom": 18
                },
                {
                    "color": "#f3f3f3",
                    "opacity": 1,
                    "zoom": 19
                },
                {
                    "color": "#f4f4f4",
                    "opacity": 1,
                    "zoom": 20
                },
                {
                    "color": "#f5f5f5",
                    "opacity": 1,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "all": [
                    "is_tunnel",
                    "path"
                ]
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#bababa"
                },
                {
                    "opacity": 0.3
                }
            ]
        },
        {
            "tags": {
                "all": [
                    "is_tunnel",
                    "path"
                ]
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0
                }
            ]
        },
        {
            "tags": "road_limited",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#cccccc"
                },
                {
                    "scale": 0,
                    "zoom": 0
                },
                {
                    "scale": 0,
                    "zoom": 1
                },
                {
                    "scale": 0,
                    "zoom": 2
                },
                {
                    "scale": 0,
                    "zoom": 3
                },
                {
                    "scale": 0,
                    "zoom": 4
                },
                {
                    "scale": 0,
                    "zoom": 5
                },
                {
                    "scale": 0,
                    "zoom": 6
                },
                {
                    "scale": 0,
                    "zoom": 7
                },
                {
                    "scale": 0,
                    "zoom": 8
                },
                {
                    "scale": 0,
                    "zoom": 9
                },
                {
                    "scale": 0,
                    "zoom": 10
                },
                {
                    "scale": 0,
                    "zoom": 11
                },
                {
                    "scale": 0,
                    "zoom": 12
                },
                {
                    "scale": 0.1,
                    "zoom": 13
                },
                {
                    "scale": 0.2,
                    "zoom": 14
                },
                {
                    "scale": 0.3,
                    "zoom": 15
                },
                {
                    "scale": 0.5,
                    "zoom": 16
                },
                {
                    "scale": 0.6,
                    "zoom": 17
                },
                {
                    "scale": 0.7,
                    "zoom": 18
                },
                {
                    "scale": 0.79,
                    "zoom": 19
                },
                {
                    "scale": 0.83,
                    "zoom": 20
                },
                {
                    "scale": 0.9,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": "road_limited",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 0
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 1
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 2
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 3
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 4
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 5
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 6
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 7
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 8
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 9
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 10
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 11
                },
                {
                    "color": "#ffffff",
                    "scale": 1.4,
                    "zoom": 12
                },
                {
                    "color": "#ffffff",
                    "scale": 0.1,
                    "zoom": 13
                },
                {
                    "color": "#f0f0f0",
                    "scale": 0.2,
                    "zoom": 14
                },
                {
                    "color": "#f0f0f0",
                    "scale": 0.3,
                    "zoom": 15
                },
                {
                    "color": "#f2f2f2",
                    "scale": 0.5,
                    "zoom": 16
                },
                {
                    "color": "#f3f3f3",
                    "scale": 0.6,
                    "zoom": 17
                },
                {
                    "color": "#f5f5f5",
                    "scale": 0.7,
                    "zoom": 18
                },
                {
                    "color": "#f7f7f7",
                    "scale": 1.18,
                    "zoom": 19
                },
                {
                    "color": "#f8f8f8",
                    "scale": 1.23,
                    "zoom": 20
                },
                {
                    "color": "#fafafa",
                    "scale": 1.33,
                    "zoom": 21
                }
            ]
        },
        {
            "tags": {
                "any": "landcover",
                "none": "vegetation"
            },
            "stylers": {
                "visibility": "off"
            }
        }
    ]
  }));
    
   

    

    map.addChild(new YMapDefaultFeaturesLayer());

// Создайте DOM-элемент для содержимого маркера.
// Важно это сделать до инициализации маркера!
// Элемент можно создавать пустым. Добавить HTML-разметку внутрь можно после инициализации маркера.
const content = document.createElement('div');

// Инициализируйте маркер
const marker = new YMapMarker(
  {
    coordinates: [37.621202, 55.753544],
    draggable: false
  },
  content
);

// Добавьте маркер на карту
map.addChild(marker);

// Добавьте произвольную HTML-разметку внутрь содержимого маркера
content.classList.add('marker')
content.innerHTML = '<img src="icons/map-pin.svg">'

}
