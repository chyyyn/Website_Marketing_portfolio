(function () {
    const spanEl = document.querySelector('main h2 span');
    // const txtArr = ['Front-End Developer', 'Creative Coder', 'Problem Solver', 'UI/UX Enthusiast', 'Web Innovator'];
    txtArr = ['Multicultural Market Analyst', 'Technology-Driven Marketer', 'Innovative Problem Solver', 'Data-Driven Strategist', 'Cross-Cultural Branding Enthusiast'];
    
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length != 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 105));
        } else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt != 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 105))
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }

    writeTxt()
})();

// 스크롤하면 header태그에 active클래스 추가 및 삭제
(function () {
    const headerEl = document.querySelector('header');
    window.addEventListener("scroll", function () {
        this.requestAnimationFrame(scrollCheck);
    })

    function scrollCheck() {
        const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        if (browserScrollY > 0) {
            headerEl.classList.add('active');
        } else {
            headerEl.classList.remove('active');
        }
    }
})();

const animationMove = (selector) => {
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior: 'smooth'})
    console.log(target);
}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function (e) {
        animationMove(e.target.dataset.target);
    })
}
