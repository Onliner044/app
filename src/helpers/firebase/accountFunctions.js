import { auth, database } from './init';
import { USERS } from './refs';

export const logOut = () => {
    auth.signOut();
    document.location.reload();
}

export const deleteAccount = () => {
    database.ref(`${USERS}/${auth.currentUser.uid}`).remove().then(
        () => {
            auth.currentUser.delete().then(
                () => {
                    alert('Аккаунт успешно удален!');
                    document.location.reload();
                },
                () => {
                    alert('Ошибка при удалении аккаунта!');
                }
            );
        },
        () => {
            console.log('не удалось удалить данные из БД');
        }
    );
}