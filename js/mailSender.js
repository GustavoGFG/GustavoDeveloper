function sendMessage() {
  (function () {
    emailjs.init('VxEOB2sbrad41ubpC'); //Account Public Key
  })();
  let serviceID = 'service_3mqnw3h'; //Email Service ID
  let templateID = 'template_94wjxt3'; //Email Template ID

  let params = {
    sendername: document.getElementById('name').value,
    senderemail: document.getElementById('email').value,
    senderphone: document.getElementById('phone').value,
    subject: 'Message from Portfolio',
    message: document.getElementById('message').value,
  };
  emailjs
    .send(serviceID, templateID, params)
    .then(response => {
      alert(
        'Thank you' + params['sendername'] + '! Your message has been sent.'
      );
    })
    .catch();
}
