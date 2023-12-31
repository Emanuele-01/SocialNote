
import { loginSuccess } from "../reducer/logReducer";

export const TOKEN_QUERY = 'TOKEN_QUERY';
export const PRIVATE_PROFILE = 'PRIVATE_PROFILE';
export const SING_OUT = "SING_OUT";
export const POST_USER = "POST_USER";
export const GET_ALL_POST = "GET_ALL_POST"
export const LOADING = 'LOADING'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVtYW51ZWxlIFBpdG9uaSIsImlhdCI6MTUxNjIzOTAyMn0.ywBYEeT3Pm9ikR0tWtSlhDBnsTWKIRCn8V_7ww8eg9o'


export const getRegister = (dataSendRegister, navigated) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(dataSendRegister),
            });
            const data = await response.json()
                console.log(dataSendRegister);
                console.log(data);
            if (response.ok) {
                dispatch({ type: PRIVATE_PROFILE, payload: data })
                dispatch({ type: SING_OUT, payload: true })
                dispatch(loginSuccess())
                navigated('/home')
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }
}

export const getLogin = (dataSendLogin, navigated) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: LOADING, payload: true })
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(dataSendLogin),
            });
            const data = await response.json()
                console.log(dataSendLogin);
                console.log(data);
            if (response.ok) {
                dispatch({ type: TOKEN_QUERY, payload: data })
                dispatch({ type: LOADING, payload: false })
            }else {
                dispatch({ type: LOADING, payload: false })
            }
            const responseUser = await fetch('http://localhost:3001/social&note/users/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.accessToken}`,
                },
            });
            const dataUser = await responseUser.json()
            console.log(dataUser);
            if (responseUser.ok) {
                dispatch({ type: PRIVATE_PROFILE, payload: dataUser })
                dispatch({ type: SING_OUT, payload: true })
                dispatch(loginSuccess())
                navigated('/home')
            } else {
                dispatch({ type: LOADING, payload: false })
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }
}


export const getPost = (dataPostSend) => {
    return async (dispatch) => {
        console.log(dataPostSend);
        try {
            const response = await fetch('http://localhost:3001/social&note/post', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(dataPostSend),
            })
            const data = await response.json()
            if (response.ok) {
                dispatch({ type: POST_USER, payload: data })
            } else {
                console.log("errore");
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }
}

export const deletePost = (idPost, authUserToken) => {
    return async () => {
        console.log(idPost);
        try {
            const response = await fetch(`http://localhost:3001/social&note/post/${idPost}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${authUserToken}`
                }
            })
            if (response.ok) {
                console.log('fetch fatta con successo');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const updatePost = (idPost, authUserToken) => {
    return async () => {
        console.log(idPost);
        try {
            const response = await fetch(`http://localhost:3001/social&note/post/${idPost}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${authUserToken}`
                },
            })
            if (response.ok) {
                console.log('fetch fatta con successo');
            }
        } catch (error) {
            console.log(error);
        }
    }
}