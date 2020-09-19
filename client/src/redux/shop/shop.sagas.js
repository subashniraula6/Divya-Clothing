import { takeEvery, all, call, put } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { shopActionTypes } from './shop.types'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('Collections')
        const snapShot = yield collectionsRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot)// call(1,2) 1=> function, 2=> parameter
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}
export function* onFetchCollectionsStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}

export default function* shopSagas() {
    yield all([
        call(onFetchCollectionsStart)
    ])
}