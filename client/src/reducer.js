import { combineReducers } from 'redux';

let bearReducer = function (state = [], action) {
    if (action) {
        if (action.type === 'FETCH_BEAR') {
            return action.payload
        }
    }
    return state
}

let reducers = combineReducers({
    bear: bearReducer
})

export default reducers