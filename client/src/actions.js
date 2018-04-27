import axios from 'axios';

export function fetchBear () {
    return (dispatch) => {
        axios.get('http://localhost:8000/api/bears')
            .then(res => {
                dispatch({ type: 'FETCH_BEAR', payload: res.data })
            })
    }
}