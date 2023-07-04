
export const TOKEN_QUERY = 'TOKEN_QUERY';
export const PRIVATE_PROFILE = 'PRIVATE_PROFILE';

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
              //  dispatch({ type: PRIVATE_PROFILE, payload: data })
              //  setSingOut(true)
                console.log('registrazione effetuata con successo')
            }
        } catch (error) {
            console.log('error: ' + error)
        }
    }
}