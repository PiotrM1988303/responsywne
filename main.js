const burgerBtn = document.querySelector(".burger-icon")
const mobileNav = document.querySelector(".mobile-nav-items")
const allMobileNavigationItems = document.querySelectorAll(".mobile-nav-item")
// NodeList czyli obiekt tablicopodobny, można stosować funkcje jak na tablicach



const presentNav = () => {
    mobileNav.classList.toggle("active");
    // "żągluj klasą"
    allMobileNavigationItems.forEach(item => {
        item.addEventListener("click", () => {
            mobileNav.classList.remove("active")
        })
    })

    /*dla każdego elementu tablicopodobnego allnive gdzie pojedynczy element został nazwany itemwykonaj funkcje, addeventlsitner na click, w której po kliku mobile nav ma tracić klase*/
}
burgerBtn.addEventListener("click", presentNav);
// po kliknięciu na przycisk ma się wyświetlać mobilny nav
