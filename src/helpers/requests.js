const url = 'http://localhost:8080';

export const request = (method, url, contentType = 'text/html', withCredentials = false, isAsync = true, body = undefined) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, isAsync);
  xhr.withCredentials = withCredentials;
  xhr.setRequestHeader('Content-Type', contentType);
  xhr.send(body);

  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve({
            status: xhr.status,
            responseText: xhr.responseText,
          });
        } else {
          reject({
            status: xhr.status,
            responseText: xhr.responseText,
          });
        }
      }
    };

    xhr.onerror = () => {
      reject({
        status: xhr.status,
        responseText: xhr.responseText,
      });

      alert('Ошибка!');
      console.log(xhr.status, xhr.responseText);
    };
  });
};

export const registrationXMLHTTPRequest = (login, email, password) => {
  const body = {
    password,
    mail: email,
    username: login,
  };

  return request('POST', `${url}/reg`, 'application/json', false, true, JSON.stringify(body));
};

export const loginXMLHTTPRequest = (login, password) => {
  const body = {
    password,
    username: login,
  };

  return request('POST', `${url}/login`, 'application/json', false, true, JSON.stringify(body));
};

export const logOutXMLHTTPRequest = () => request('POST', `${url}/users/logout`);

export const getTodosXMLHTTPRequest = () => request('GET', `${url}/todos?time=${Date.now()}`, 'application/json', true);

export const createTodoXMLHTTPRequest = (title, description) => {
  const body = {
    title,
    description,
  };

  return request('PUT', `${url}/todo`, 'application/json', true, true, JSON.stringify(body));
};

export const deleteTodoXMLHTTPRequest = (title) => {
  const body = {
    title,
  };

  return request('DELETE', `${url}/todo`, 'application/json', true, true, JSON.stringify(body));
};

export const replaceTodoXMLHTTPRequest = (todo) => {
  const body = {
    title: todo.id,
    description: todo.text,
    success: todo.completed,
  };

  return request('POST', `${url}/todo`, 'application/json', true, true, JSON.stringify(body));
};
