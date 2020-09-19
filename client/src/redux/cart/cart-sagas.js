import { all, call, takeLatest, put } from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout)
}

export function* clearCartOnSignout() {
    try {
        console.log("triggered")
        yield put(clearCart())
    } catch (error) {
        alert("Error is clearing cart",error)
    }
}

export default function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}