import '@fortawesome/fontawesome-free/css/all.css';
import Swal from 'sweetalert2';

let orderBtn = document.getElementById('orderBtn');

orderBtn.addEventListener('click', () => {
  Swal.fire({
    icon: 'question',
    title: 'How to order?',
    text:
      'To order your personalized handmade doll, all you have to do is DM me a picture of yourself and the doll would be prepared within a few days!',
    footer: '<b>Shipping usually takes between 15-20 days</b>',
  });
});
