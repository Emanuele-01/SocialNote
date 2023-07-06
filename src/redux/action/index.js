export const TOKEN_QUERY = 'TOKEN_QUERY';
export const PRIVATE_PROFILE = 'PRIVATE_PROFILE';
export const SING_OUT = "SING_OUT";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVtYW51ZWxlIFBpdG9uaSIsImlhdCI6MTUxNjIzOTAyMn0.ywBYEeT3Pm9ikR0tWtSlhDBnsTWKIRCn8V_7ww8eg9o'


export const getRegister = (dataSendRegister, setSingOut) => {
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
                setSingOut(true)
                console.log('registrazione effetuata con successo')
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }
}

export const getLogin = (dataSendLogin) => {
    return async (dispatch, getState) => {
        try {
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
                console.log('login effetuata con successo')
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
                dispatch({type: SING_OUT, payload: true})
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }
}
