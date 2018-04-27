import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
import { fetchBear } from './actions';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleWare(reducers);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    store.subscribe( () => {
      this.setState( {data: store.getState().bear} )
    })
    store.dispatch(fetchBear())
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
