"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal-container');
    const feedbackForm = document.querySelector('.feedback-form');
    const sentButton = document.querySelector('.sent-mes');

    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = feedbackForm.querySelector('input[name="name"]').value;
        const number = feedbackForm.querySelector('input[name="number"]').value;
        const question = feedbackForm.querySelector('textarea[name="question"]').value;

        if (name && number && question) {
            modal.classList.add('active');

            feedbackForm.reset();

            setTimeout(() => {
                modal.classList.remove('active');
                modal.style.transition = '0.3s';
            }, 3000);
        } else {
            alert('Пожалуйста, заполните все поля формы');
        }
    });
});