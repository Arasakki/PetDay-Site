// $(document).ready(function() {
//     $('.q_accordion_item-trigger').click(function(){
//         const sheet = new CSSStyleSheet();
//         $(this).next('.q_accordion_item-content').slideToggle(50);
//     });
// });



// (function () {
//     const header = document.querySelector('.header');
//     window.onscroll = () => {
//         if (window.pageYOffset > 50) {
//             header.classList.add('.header_active');
//         }
//     };
// }());

$(document).ready(function(){
    const openPopUp_b = document.getElementById('open_pop_up_b');
    const closePopUp_b = document.getElementById('pop_up_b_close');
    const PopUp_b = document.getElementById('pop_up_b');

    openPopUp_b.addEventListener('click', function(e){
        e.preventDefault();
        PopUp_b.classList.add('active');
    });

    closePopUp_b.addEventListener('click', () => {
        PopUp_b.classList.remove('active');
    });
});
