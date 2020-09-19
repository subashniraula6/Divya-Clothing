import { call, all, takeLatest, put } from 'redux-saga/effects'
import userActionTypes from './user.types'

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { googleSignInSuccess, googleSignInFailure, signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions'

//GOOGLE SIGNIN
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}

//EMAIL SIGNIN
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.SIGNIN_START, signInWithEmail)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

//CHECK USER SESSION
export function* checkUserSession() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return;

        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSession)
}

//SIGNOUT

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGNOUT_START, signOutStart)
}

export function* signOutStart() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

//SIGNUP
export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGNUP_START, signUp)
}

export function* signUp ({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user : user, additionalData: { displayName }}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpSuccess () {
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp)
}

export function* signInAfterSignUp ({payload : {user, additionalData}} ) {
    const userRef = yield call(createUserProfileDocument, user, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({id : user, ...userSnapshot}))
}

//OVERALL SAGA
export default function* userSaga() {    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}