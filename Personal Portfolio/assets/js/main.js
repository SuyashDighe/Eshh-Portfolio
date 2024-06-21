/*=============== Active Link =============== */

/*=============== Background header =============== */

// function scrollHeader() {
//     const header = document.getElementById('header');

//     if (this.screenY >= 50) header.classList.add('scroll-header');
//     else header.classList.remove('scroll-header');
// }

// window.addEventListener('scroll', scrollHeader);



/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});

/*=============== Active work =============== */
// const lineWork = document.querySelectorAll('.category__btn');

// function activeWork() {
//     lineWork.forEach((a) => a.classList.remove('active-work'));
//     this.classList.add('activ1');
// }

// lineWork.forEach((a) => addEventListener('click', activeWork));

// /*=============== Contact form =============== */
// const contactForm = document.getElementById('contact-form'),
//     contactName = document.getElementById('contact-name'),
//     contactEmail = document.getElementById('contact-email'),
//     Message = document.getElementById('message'),
//     contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
//     e.preventDefault();
//     if (
//         contactName.value === '' ||
//         contactEmail.value === '' ||
//         Message.value === ''
//     ) {
//         contactMessage.classList.remove('color-light');
//         contactMessage.classList.add('color-dark');

//         contactMessage.textContent = 'Write all the inputs feilds';
//     } else {
//         emailjs.sendForm(
//                 'service_8q4h071', 'template_a7l7kxm', '#contact-form', 'Eg5pbqwVFa31r1vsv'
//             )
//             .then(() => {
//                     contactMessage.classList.add('color-light');
//                     contactMessage.textContent = 'Message send ✔';

//                     setTimeout(() => {
//                         contactMessage.textContent = '';
//                     }, 5000);
//                 },
//                 (error) => {
//                     alert('OOps! something went wrong....', error)
//                 }
//             );
//     }
// };

// contactName.value = '';
// contactEmail.value = '';
// Message.value = '';

// contactForm.addEventListener('submit', sendEmail)