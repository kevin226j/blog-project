import {createReducer} from 'redux-act'
import * as a from '../actions/auth'
import {takeIfExits} from '../utils/localStorage'

const getDefaultState = _ => ({
    token: takeIfExits('token'),
    id : takeIfExits('id'),
    tokenExpirationTime: takeIfExits('tokenExpirationTime', Number)
})

export default _ =>
    createReducer(
        {
            [a.recieveAuthData]: (state, {token, tokenExpirationTime, id}) => ({
                ...state,
                id,
                token,
                tokenExpirationTime
            }),
            [a.unauthorizeUser]: () => ({})
        },
        getDefaultState()
    )