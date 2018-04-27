import React, { Component } from 'react';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleWare(reducers);

let fetchBearActionCreator = function () {
  return (dispatch) => {
    axios.get('http://localhost:8000/api/bears')
      .then(res => {
        dispatch({type: 'FETCH_BEAR', payload: res.data})
      })
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    store.subscribe( () => {
      this.setState( {data: store.getState().bear} )
    })
    store.dispatch(fetchBearActionCreator())
  }

  render() {
    let bears = this.state.data
    return (
      <div>
        {
          bears.map(bear => <div key={bear.id}>{bear.name}</div>)
        }
      </div>
    );
  }
}

export default App;
