import { put, call} from 'redux-saga/effects'
import {SubmissionError} from 'redux-form'

import {to} from '../actions/navigation'
import {recieveAuthData} from  '../actions/auth'
import {LOGIN,REGISTER} from '../constants/api'
import {post} from '../utils/api'
import {startApp} from '../actions/generic'

const authSaga = (url, thenGoTo) => 
    function*({payload : {values, reject}}){
        try {
            const authData = yield call(post, url, values)
            yield put(recieveAuthData(authData))
            yield put(startApp())
            yield put(to(thenGoTo))
        } 
        catch ({status, message}){
            yield call(reject, new SubmissionError(message))
        }
    }

export const submitLogin = authSaga(LOGIN, 'start')
export const submitRegister = authSaga(REGISTER, 'start')
