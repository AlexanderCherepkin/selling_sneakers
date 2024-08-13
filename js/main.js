
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
        menuBtn.classList.toggle('hidden') // Добавлено для скрытия/показа кнопки
    })
})




    $(document).ready(function () {
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1380,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    },
                    breakpoint: 900,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    },
                    breakpoint: 545,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        dots: false,
                    },
                }
            ]
        })
    });



    

// Функция для проверки, виден ли элемент в viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

// Функция для анимации появления кроссовок
function animateSneakers() {
    const sneakers = document.querySelectorAll('.sport-sneakers')
    sneakers.forEach(sneaker => {
        if (isElementInViewport(sneaker)) {
            sneaker.classList.add('animate')
        }
    })
}

// Слушаем событие прокрутки
window.addEventListener('scroll', animateSneakers)

// Запускаем анимацию при загрузке страницы
document.addEventListener('DOMContentLoaded', animateSneakers)






const element = document.querySelector('.modern__images')
// Показать элемент
element.classList.add('visible')
// Скрыть элемент
element.classList.remove('visible');




document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn')

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block'
        } else {
            scrollToTopBtn.style.display = 'none'
        }
    })

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu__link, .options__link, .sellers__link')
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault()
            const url = this.getAttribute('href')
            const target = this.getAttribute('target')
            if (url && url !== '#') {
                if (target === '_blank') {
                    window.open(url, '_blank')
                } else {
                    const targetElement = document.querySelector(url)
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' })
                    } else {
                        window.location.href = url
                    }
                }
            }
        })
    })
});



document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.menu-search')
    const searchModal = document.createElement('div')

    searchModal.style.display = 'none'
    searchModal.style.position = 'fixed'
    searchModal.style.top = '20%'
    searchModal.style.left = '24%'
    searchModal.style.transform = 'translate(-50%, -50%)'
    searchModal.style.backgroundColor = 'transparent'
    searchModal.style.padding = '20px'
    // searchModal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
    searchModal.innerHTML = `
        <input type="text" placeholder="Search..." style="width: 100%; padding: 10px; margin-bottom: 10px; background-color: #03e6ff; color: #6e6e6e; border-radius: 50px;">
        <button id="closeSearchModal" style="padding: 10px 10px; color: #ababab;">Close</button>
    `

    document.body.appendChild(searchModal)

    searchIcon.addEventListener('click', function (event) {
        event.preventDefault()
        searchModal.style.display = 'block'
    })

    document.getElementById('closeSearchModal').addEventListener('click', function () {
        searchModal.style.display = 'none'
    })
});








