
const playBtn = document.querySelector('.bonus__main-wheel-btn'),
      main = document.querySelector('.bonus__main'),
      chips = document.querySelectorAll('.bonus__chip'),
      popupChips = document.querySelectorAll('.bonus__overlay-chip'),
      firstWoman = document.querySelector('.bonus__overlay-firstWoman'),
      secondWoman = document.querySelector('.bonus__overlay-secondWoman'),
      wheel = document.querySelector('.bonus__main-wheel-reel'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      rules = document.querySelector('.bonus__rules'),
      footerRulesBtn = document.querySelector('.bonus__footer-rules'),
      overflow = document.querySelector('body'),
      popupClose = document.querySelector('.bonus__rules-close'),
      video = document.querySelector('.bonus__main-video-bg'),
      wrapper = document.querySelector('.bonus')


const bonusText = document.querySelector('.bonus__main-bubble');
const bonusLink = document.querySelector('.bonus__secondWin-btn');
const audioMain = document.querySelector('.main-audio');
const audioWheel = document.querySelector('.wheel-audio');
const audioPopup = document.querySelector('.popup-audio');
const clickAudio = document.querySelector('.click-audio');
audioMain.volume = 0.3;
audioWheel.volume = 0.2;
clickAudio.volume = 0.2;

window.onload = videoSource(video, 'img/video.mp4', 'video/mp4');


function videoSource(element, src, type) {
    if(window.innerWidth > 1024) {
        let source = document.createElement('source')
        source.src = src
        source.type = type
        video.appendChild(source)
    }
}

let triesCounter = 0

footerRulesBtn.addEventListener('click', () => {
    clickAudio.play()
    overlay.classList.remove('opacity-overlay')
    rules.classList.remove('hide')
    main.classList.add('blur')
    chips.forEach(function (el) {
        el.classList.add('blur')
    })
    popupChips.forEach(function (el) {
        el.classList.add('hide')
    })
})

popupClose.addEventListener('click', () => {
    clickAudio.play()
    main.classList.remove('blur')
    overlay.classList.add('opacity-overlay')
    rules.classList.add('hide')
    overflow.style.overflow = 'unset'
    chips.forEach(function (el) {
        el.classList.remove('blur')
    })
})

playBtn.addEventListener('click', () => {

    if (triesCounter === 0) {
        runFirstRotation()
        audioMain.play()

    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    audioWheel.play()
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    firstWoman.classList.remove('hide')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'

    audioWheel.pause()
    audioPopup.play()
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
        bonusText.style.display = "none"
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    audioWheel.play()
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    secondWoman.classList.remove('hide')
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
    audioWheel.pause()
    audioPopup.play()
}

bonusLink.addEventListener('click', () => {
    clickAudio.play();
})

popupFirstBtn.addEventListener('click', () => {
    clickAudio.play()
    main.classList.remove('blur')
    firstWoman.classList.add('hide')
    chips.forEach(function (el) {
        el.classList.remove('blur')
    })
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    overlay.classList.remove('win-tab')
    overlay.classList.remove('win-mob')
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    main.classList.add('blur')
    chips.forEach(function (el) {
        el.classList.add('blur')
    })
    popupChips.forEach(function (el) {
        el.classList.remove('hide')
    })
}

(function () {
    let url = new URL(window.location.href)

    const params = [
        'l',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'param1',
        'param2'
    ]

    const linkParams = [
        'affid',
        'cpaid'
    ]

    // ищем в url redirectUrl в url:
    if (url.searchParams.has('redirectUrl')) {
        var redirectUrl = new URL(url.searchParams.get('redirectUrl'));
        if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) { //если ссылка в ссылка redirectUrl корректная
            localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
        }
    }
    /////////

    params.forEach((param) => {
        if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param))
    })

    linkParams.forEach((linkParam) => {
        if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam))
    })

    window.addEventListener('click', function (e) {
        var link, parent = e.target.closest('a')
        parent && (
            e.preventDefault(),
            localStorage.getItem("redirectUrl") ?
            link = new URL(localStorage.getItem("redirectUrl"))
            : (
                link = new URL(parent.href),
                affid = localStorage.getItem('affid'),
                cpaid = localStorage.getItem('cpaid'),
                affid && cpaid && (link.pathname = '/' + affid + '/' + cpaid)
                ),

            params.forEach((param) => {
                url.searchParams.has(param) && link.searchParams.set(param, localStorage.getItem(param))
            }
        ), document.location.href = link)
    })
})()