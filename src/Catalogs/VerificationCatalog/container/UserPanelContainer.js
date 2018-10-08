import { connect } from 'react-redux';

import { UserPanel } from '../components/UserPanel';
import { firebase } from '../../fireBaseCatalog/firebaseInit';
import { logout } from '../other/functions';
import { visibleUserPanel } from '../actions/actions';

const LogOut = (dispatch) => {
    logout();
    dispatch(visibleUserPanel(true));
}

const Remove = () => {
    firebase.database().ref("users").child(firebase.auth().currentUser.email.replace(".", ",")).remove();
    firebase.auth().currentUser.delete().then(
        () => {
            alert("Аккаунт успешно удален!");
        },
        () => {
            console.log("Аккаунт не удален!");
        }
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.reducerGetUserLog
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onClickLogOut: () => LogOut(dispatch),
        onClickRemove: () => Remove(),
    }
}

export const UserPanelContainer = connect(mapStateToProps, mapDispathToProps)(UserPanel);