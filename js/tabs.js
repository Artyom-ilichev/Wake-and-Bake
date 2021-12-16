const tabs = document.querySelectorAll('.tab-link');
const tabsContent = document.querySelectorAll('.catalog');

function hideTabsAndView(index) {
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }

    tabs[index].classList.add("active-tab");

    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove("active");
    }

    tabsContent[index].classList.add("active");
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        hideTabsAndView(i);
    });
}

hideTabsAndView(0);