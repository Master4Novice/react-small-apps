const initialState = {
    username: '',
    password: '',
    user:{
        username:'',
        password:''
    },
    status:''
};

const LoginAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_USER":
            return { ...state, status: action.payload };      
        default:
            return state;
    }
}

export default LoginAuthReducer;