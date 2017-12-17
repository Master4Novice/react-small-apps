import axios from 'axios';
const URL = 'http://localhost:6060/';

export function authenticateUserAction(user){
    return function(dispatch) {
        axios({
            url:URL+'authUser/',
            data:user,
            method:"POST",
            responseType:"json"
        }).then(response => {
                dispatch({
                    type: "AUTH_USER",
                    payload: response.data.message,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
