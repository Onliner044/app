import React from 'react';
import { connect } from 'react-redux';

import { UserPanelContainer } from './container/UserPanelContainer';
import { LogReg } from './components/LogReg';
import { firebase } from '../fireBaseCatalog/firebaseInit';
import { visibleUserPanel } from './actions/actions';
import { setTodos, setId } from '../todosCatalog/actions/index';

const App = ({form, showUserPanel, setStartTodos, setStartId}) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            showUserPanel(false);
            
            if (user.emailVerified) {
                firebase.database().ref("users/" + user.email.replace(".", ",") + "/verify").set(true);
            }

            firebase.database().ref("users/" + user.email.replace(".", ",") + "/todos").once("value", (data) => {
                var val = data.val();
                
                var startToddos = new Array();
                var i = 0;
                var lastlId = 0;
                for (const key in val) {
                    var id = val[key]["id"];

                    startToddos[i++] = {
                        id: id,
                        text: val[key]["text"],
                        completed: val[key]["checked"]
                    }
                    
                    if (lastlId < id)
                        lastlId = id;
                }

                if (lastlId)
                    setStartId(++lastlId);
                
                setStartTodos(startToddos);
            });
        } else {
            showUserPanel(true);
        }
    })
    
    return (
        <div>
            {form ? 
            <LogReg /> :
            <UserPanelContainer />}
        </div>
    );
} 

export default connect(
    (state) => {
        return {
            user: state.reducerGetUserLog,
            form: state.verificationReducer.reducerVisibleUserPanel
        }
    },
    (dispatch) => {
        return {
            showUserPanel: (isVisible) => dispatch(visibleUserPanel(isVisible)),
            setStartTodos: (todos) => dispatch(setTodos(todos)),
            setStartId: (startId) => dispatch(setId(startId))  
        }
    }
)(App);