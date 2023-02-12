const ticket = document.querySelectorAll(".ticket"); // 유저 티켓
const countEntrance = document.querySelector(".count__entrance"); // 티켓 갯수
/** 티켓 애니메이션 */
document.addEventListener("DOMContentLoaded", () => {
    ticket.forEach((item, i) => {
        if (window.scrollY + window.innerHeight / 1.2 > item.offsetTop) {
            gsap.to(item, {
                duration: 0.5,
                opacity: 1,
                y: 0,
                delay: (i + 1) * 0.1,
            });
        }
    });
    window.addEventListener("scroll", () => {
        let scroll =
            (window.scrollY || window.pageYOffset || window.scrollTop) +
            window.innerHeight / 1.2;
        if (isNaN(scroll)) return (scroll = 0);
        ticket.forEach((item) => {
            if (scroll > item.offsetTop) {
                gsap.to(item, {
                    duration: 0.3,
                    opacity: 1,
                    y: 0,
                });
            }
        });
    });
});
/** 티켓 체크 카운트 */
ticket.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("check");
        let check = document.querySelectorAll(".ticket.check");
        countEntrance.style.display = "inline-flex";
        countEntrance.innerText = check.length;
        if (countEntrance.innerText === "0")
            return (countEntrance.style.display = "none");
    });
});
