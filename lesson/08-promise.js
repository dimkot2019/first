console.log('string #1');

setTimeout(() => {
  console.log('string #4');
  const x = 100;
}, 0);

console.log('string #7');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const x = 100;
    resolve(x);
  }, 5000);

  setTimeout(() => {
    reject('Time out!');
  }, 4999);
});

console.log(promise);

promise
  .then((response) => {
    console.log('x is ', response);
  })
  .catch((error) => {
    console.error(error);
  });

const serverRequest = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://reqres.in/api/users?page=2', true );
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status !== 200) {
      reject('error status - ' + xhr.status + '. msg: ' + xhr.responseText);
    }

    if (xhr.readyState === 4) {
      resolve(xhr.responseText);
    }
  };
});

const container = document.createElement('div');
container.style.display = 'flex';
document.body.appendChild(container);

const addUserOnPage = (user) => {
  const card = document.createElement('div');
  card.style.border = '1px solid black';
  card.style.margin = '5px';
  card.style.padding = '10px';
  container.appendChild(card);

  const title = document.createElement('h3');
  title.innerText = `${user.first_name} ${user.last_name}`;
  card.appendChild(title);

  const avatar = document.createElement('img');
  avatar.src = user.avatar;
  card.appendChild(avatar);

  const email = document.createElement('p');
  email.textContent = user.email;
  card.appendChild(email);
};

serverRequest
  .then(jsonUser => {
    const users = JSON.parse(jsonUser);
    users.data.forEach(user => {
      addUserOnPage(user);
    });
  })
  .catch(error => {
    console.error(error);
  });

const serverFetchRequest = fetch('https://reqres.in/api/users?page=2', {method: 'GET'});

serverFetchRequest
  .then(responseServer => {
    return responseServer.json();
  })
  .then(users => {
    console.log({users});
  })
  .catch(error => {
    console.error(error);
  });