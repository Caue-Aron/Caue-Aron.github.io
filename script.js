const headerBtnList = document.querySelectorAll('.header-button');

headerBtnList.forEach(headerBtn => {
    headerBtn.addEventListener('click', () => {
        document.querySelector('.header-button-focused')?.classList.remove('header-button-focused')
        headerBtn.classList.add('header-button-focused');
    });
})