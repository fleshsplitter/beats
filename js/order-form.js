function orderForm() {
  const myForm = document.querySelector('.form');
  const submitButton = document.querySelector('#submit');
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName('close')[0];
  const modalText = document.querySelector('#modal-text');
  const resetBtn = document.querySelector('#reset');

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  resetBtn.addEventListener('click', () => {
    myForm.elements.name.style.borderColor = 'transparent';
    myForm.elements.phone.style.borderColor = 'transparent';
    myForm.elements.comment.style.borderColor = 'transparent';
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-red');
    myForm.elements.name.style.borderColor = 'transparent';
    myForm.elements.phone.style.borderColor = 'transparent';
    myForm.elements.comment.style.borderColor = 'transparent';

    const data = {
      name: myForm.elements.name.value,
      phone: myForm.elements.phone.value,
      comment: myForm.elements.comment.value,
      to: 'my@mail.com',
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader('content-type', 'application/json');

    if (!validateForm(myForm)) {
      console.warn('заполните все поля');
    } else {
      xhr.send(JSON.stringify(data));
    }

    xhr.addEventListener('load', () => {
      if (xhr.response.status === 1) {
        modalText.innerHTML = xhr.response.message;
        modal.style.display = 'flex';
      }
    });

    xhr.addEventListener('error', () => {
      modalText.innerHTML =
        'Отправить письмо не удалось, повторите запрос позже';
      modal.classList.add('modal-red');
      modal.style.display = 'flex';
    });
  });

  function validateForm(form) {
    let isValid = true;

    if (!myForm.elements.name.value) {
      isValid = false;
      myForm.elements.name.style.borderColor = 'red';
      console.log('поле имя должно быть заполнено');
    }

    if (!myForm.elements.phone.value) {
      isValid = false;
      myForm.elements.phone.style.borderColor = 'red';

      console.log('поле телефон должно быть заполнено');
    }

    if (!myForm.elements.comment.value) {
      isValid = false;
      myForm.elements.comment.style.borderColor = 'red';

      console.log('обязательно напишите комментарий!');
    }

    return isValid;
  }
}

export default orderForm;
