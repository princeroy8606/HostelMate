import * as api from '../../api'

export const validatehostel = (hostelID) => async (dispatch) => {
    try {
        const { data } = await api.validateHostel(hostelID)
        // .then(Response => console.log(Response.status))
        dispatch({ type: "VALIDATE_HOSTEL", data });
    } catch (err) {
        console.log(err)
    }
}
export const verifyemail = (maildata) => async (dispatch) => {
    try {
        const { data } = await api.verifyEmail(maildata)
        dispatch({ type: "EMAIL_VERIFICATION", data });
    } catch (err) {
        console.log(err)
    }
}
export const verifyOTP = (hostelID) => async (dispatch) => {
    try {
        const { data } = await api.VerifyOTP(hostelID)
        dispatch({ type: "OTP_VERIFICATION", data });
    } catch (err) {
        console.log(err)
    }
}

export const SingnUp = (userData) => async (dispatch) => {
    console.log(userData)
    try {
        const { data } = await api.singnUp(userData)
        dispatch({ type: 'SIGN_UP', data })
    } catch (err) {
        console.log(err)
    }
}
export const LoginIn = (loginData) => async (dispatch) => {
    console.log(loginData)
    try {
        const { data } = await api.logIn(loginData)
        dispatch({ type: 'LOGIN', data })
    } catch (err) {
        console.log(err)
    }
}