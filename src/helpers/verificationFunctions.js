import { clearClass } from './cssFunctions';
import { registrationXMLHTTPRequest, loginXMLHTTPRequest } from './requests';
import { setCookie } from './cookiesFunctions';

export const signIn = (login, password, setError) => {
  loginXMLHTTPRequest(login, password).then(
    (value) => {
      try {
        const payload = JSON.parse(value.responseText);
        const data = payload.data;

        setCookie('Authorization', data, {
          expires: 3600 * 24,
        });

        document.location.reload();
      } catch (e) {
        alert('Ошибка при входе!');
      }
    },
  ).catch(
    (value) => {
      switch (value.status) {
        case 400:
          setError('Не правильный логин или пароль!');
          break;
        default:
          alert('Ошибка!');
          break;
      }
    },
  );
};

export const registration = (elements, setErrorInfo) => {
  const {
    elEmail, elPassword, elConfirmPassword, elLogin,
  } = elements;

  setErrorInfo({
    infoLogin: '',
    infoEmail: '',
    infoPassword: '',
    infoConfirmPassword: '',
  });
  clearClass(elLogin, elEmail, elPassword, elConfirmPassword);

  const login = {
    value: elLogin.value,
    isError: false,
    infoError: '',
  };
  const email = {
    value: elEmail.value,
    isError: false,
    infoError: '',
  };
  const password = {
    value: elPassword.value,
    isError: false,
    infoError: '',
  };
  const confirmPassword = {
    value: elConfirmPassword.value,
    isError: false,
    infoError: '',
  };

  if (login.value.indexOf(' ') !== -1 || login.value === '') {
    login.isError = true;
    login.infoError = 'Логин заполнен неверно!';
  } else if (login.value.length < 5) {
    login.isError = true;
    login.infoError = 'Логин должен состоять из 5 и более символов!';
  }

  if (!validateEmail(email.value)) {
    email.isError = true;
    email.infoError = 'E-mail указан неверно!';
  }

  if (!validatePassword(password.value)) {
    password.isError = true;
    password.infoError = 'Пароль указан неверно!';
  } else if (!validatePasswordLength(password.value)) {
    password.isError = true;
    password.infoError = 'Пароль должен состоять из 6 и более символов!';
  }

  if (!validateConfirmPassword(password.value, confirmPassword.value)) {
    confirmPassword.isError = true;
    confirmPassword.infoError = 'Пароль и пароль подтверждения не совподают!';
  }

  if (!login.isError && !email.isError && !password.isError && !confirmPassword.isError) {
    registrationXMLHTTPRequest(login.value, email.value, password.value).then(
      () => {
        alert('Регистрация произведена успешно!');

        signIn(login.value, password.value);
      },
    ).catch(
      (value) => {
        try {
          const data = JSON.parse(value.responseText);
          alert(data.msg);
        } catch(e) {
          alert('Ошибка!');
        }
      },
    );
  } else {
    setErrorInfo({
      infoLogin: login.infoError,
      infoEmail: email.infoError,
      infoPassword: password.infoError,
      infoConfirmPassword: confirmPassword.infoError,
    });

    showErrorInfo(elLogin, login.isError);
    showErrorInfo(elEmail, email.isError);
    showErrorInfo(elPassword, password.isError);
    showErrorInfo(elConfirmPassword, confirmPassword.isError);
  }
};

const showErrorInfo = (el, isError) => {
  if (isError) {
    el.classList.add('redBorder');
  }
};

const validateEmail = (email) => {
  if (email.match('^[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+$')) {
    return true;
  }

  return false;
};

const validatePasswordLength = (password) => {
  if (password.length >= 6) {
    return true;
  }

  return false;
};

const validatePassword = (password) => {
  if (password.indexOf(' ') == -1) {
    return true;
  }

  return false;
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (password === confirmPassword) {
    return true;
  }

  return false;
};
