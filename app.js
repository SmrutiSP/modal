const popModalBtn = document.querySelector('.container footer button');
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('#closeModal');

popModalBtn.addEventListener('click',popModal);
closeModalBtn.addEventListener('click',closeModal);
modalContainer.addEventListener('click',closeModal);

function popModal() {
    modalContainer.classList.add('display-modal');
}

function closeModal(event) {
    if(event.target.id==='closeModal' || event.target.classList.contains('modal-container')) {
        modalContainer.classList.remove('display-modal');
    }
}
