const CloseBtn = document.querySelector('.modal-btn');
const OpenBtn = document.querySelector('.btn');
const Body = document.body

OpenBtn.addEventListener('click', () => {
    Body.classList.add('modal-open')
});

CloseBtn.addEventListener('click', () => {
    Body.classList.remove('modal-open')
})    