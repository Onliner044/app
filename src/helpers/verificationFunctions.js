import { createUser, existEmail, sendEmailVerification } from './firebase/verificationFunctions';
import { setEmailInDatabase } from './firebase/databaseFunctions';
import { addClass, clearClass } from './cssFunctions';

export const registration = (elements, setErrorInfo) => {
    const {elEmail, elPassword, elConfirmPassword} = elements;
    clearClass(elEmail, elPassword, elConfirmPassword);

    const email = {
        value: elEmail.value,
        isError: false,
        infoError: '',
    }
    const password = {
        value: elPassword.value,
        isError: false,
        infoError: '',
    }
    const confirmPassword = {
        value: elConfirmPassword.value,
        isError: false,
        infoError: '',
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

    if (!email.isError && !password.isError && !confirmPassword.isError) {
        existEmail(email.value, 
            () => emailNotExist(email.value, password.value),
            () => emailExist()
        );
    } else {
        setErrorInfo({
            infoEmail: email.infoError,
            infoPassword: password.infoError,
            infoConfirmPassword: confirmPassword.infoError,
        });

        showErrorInfo(elEmail, email.isError);
        showErrorInfo(elPassword, password.isError);
        showErrorInfo(elConfirmPassword, confirmPassword.isError);
    }

}

const showErrorInfo = (el, isError) => {
    if (isError) {
        addClass(el, 'redBorder');
    }
}

const emailNotExist = (email, password) => {
    createUser(email, password, 
        () => succesCreateUser(email), 
        () => failureCreateUser()
    );
}

const emailExist = () => {
    alert('Данный e-mail уже зарегистрирован!');
}

const succesCreateUser = (email) => {
    setEmailInDatabase(email,
        () => successSetEmailInDatabase(),
        () => failureSetEmailInDatabase()
    );
}

const failureCreateUser = () => {
    console.debug("Не удалось создать пользователя");
}

const successSetEmailInDatabase = () => {
    sendEmailVerification(
        () => {
            alert('Регистрация прошла успешно!\nПисьмо с подтверждением e-mail отправлено вам на почту');
            //document.location.reload();
        },
        () => {
            alert('Ошибка при регистрации!');
            console.log("не удалось отправить письмо с подтверждением e-mail");
        }
    );
}

const failureSetEmailInDatabase = () => {
    console.log("не удалось занести данные в БД");
}

const validateEmail = (email) => {
    if (email.match('^[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+$')) {
        return true;
    }

    return false;
}

const validatePasswordLength = (password) => {
    if (password.length >= 6) {
        return true;
    }

    return false;
}

const validatePassword = (password) => {
    if (password.indexOf(' ') == -1) {
        return true;
    }

    return false;
}

const validateConfirmPassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
        return true;
    }

    return false;
}