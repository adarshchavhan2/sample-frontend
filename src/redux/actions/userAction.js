import axios from 'axios';

export const signup = (userData) => async(dispatch) => {
    dispatch({type:'signupRequest'});
    try {
        const {data} = await axios.post(`/api/v1/signup`, userData);
        if(data.success) {
            return dispatch({type:'signupSuccess', payload:data.user, message: data.message})
        }else{
            return dispatch({type:'signupFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const login = (userData) => async(dispatch) => {
    dispatch({type:'loginRequest'});
    try {
        const {data} = await axios.post(`/api/v1/login`, userData);
        if(data.success) {
            return dispatch({type:'loginSuccess', payload:data.user, message: data.message})
        }else{
            return dispatch({type:'loginFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const logout = () => async(dispatch) => {
    dispatch({type:'logoutRequest'});
    try {
        const {data} = await axios.get(`/api/v1/logout`);
        if(data.success) {
            return dispatch({type:'logoutSuccess', message: data.message})
        }else{
            return dispatch({type:'logoutFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const loadUser = () => async(dispatch) => {
    dispatch({type:'loadUserRequest'});
    try {
        const {data} = await axios.get(`/api/v1/me`);
        if(data.success) {
            dispatch({type:'loadUserSuccess', payload:data.user})
        }else{
            dispatch({type:'loadUserFailure'});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const getUser = (handle) => async(dispatch) => {
    dispatch({type:'getUserRequest'});
    try {
        const {data} = await axios.get(`/api/v1/@${handle}`);
        if(data.success) {
            dispatch({type:'getUserSuccess', payload:data.user})
        }else{
            dispatch({type:'getUserFailure'});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const updateProfile = (userData) => async(dispatch) => {
    dispatch({type:'updateProfileRequest'});
    try {
        const {data} = await axios.put(`/api/v1/me`, userData);
        if(data.success) {
            return dispatch({type:'updateProfileSuccess', message: data.message})
        }else{
            return dispatch({type:'updateProfileFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const updatePassword = (passwordData) => async(dispatch) => {
    dispatch({type:'updatePasswordRequest'});
    try {
        const {data} = await axios.put(`/api/v1/password`, passwordData);
        if(data.success) {
            return dispatch({type:'updatePasswordSuccess', message: data.message})
        }else{
            return dispatch({type:'updatePasswordFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}



export const forgetPassword = (email) => async(dispatch) => {

    dispatch({type:'forgetPasswordRequest'});
    try {
        const {data} = await axios.put(`/api/v1/password/forget`, email);
        if(data.success) {
            return dispatch({type:'forgetPasswordSuccess', message: data.message})
        }else{
            return dispatch({type:'forgetPasswordFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}

export const resetPassword = (passwordData, token) => async(dispatch) => {
    dispatch({type:'resetPasswordRequest'});
    try {
        const {data} = await axios.put(`/api/v1/password/reset/${token}`, passwordData);
        if(data.success) {
            return dispatch({type:'resetPasswordSuccess', message: data.message})
        }else{
            return dispatch({type:'resetPasswordFailure', error: data.message});
        }

    } catch (error) {
        dispatch({type: 'defaultError'});
    }
}