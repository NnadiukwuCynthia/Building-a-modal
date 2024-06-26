const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', e => {
    if (!e.target.closest('.modal')) {
        document.body.classList.remove('modal-is-open')
    }
})