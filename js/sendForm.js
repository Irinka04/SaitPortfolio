// const forms = document.querySelectorAll('form');

// forms.forEach(form => {
//   //На каждую форму вешаем слушатель
//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const body = {};

//     formData.append('form', form.classList.value);
//     //Создаем обьект с данными формы
//     formData.forEach((val, field) => {
//       body[field] = val;
//     });

//     const URL = 'https://jsonplaceholder.typicode.com/posts';

//     fetch(URL, {
//         method: 'post',
//         body: JSON.stringify(body),
//         headers: {
//           'Content-Type': 'application/json ; charset=UTF-8',
//         },
//       })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//       .then(() => {
//         alert('Данные отправлены');
//       })
//       .catch(error => {
//         alert(`Данные отправлены с ошибкой ${error.message}`);
//       })
//       .finally(() => {
//         form.reset();
//       });
//   });
// });
const forms = document.querySelectorAll('.form')

forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const body = {};

    formData.append('form', form.classList.value);

    formData.forEach((value, field) => {
      body[field] = value;
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(() => {
        alert('Данные отправлены успешно!');
      })
      .catch(error => {
        alert(`Данные отправлены с ошибкой ${error.message}`);
      })
      .finally(() => {
        form.reset();
      })

  });
});