import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBear } from './actions';

class App extends Component {

  render() {
    let bears = this.props.bear
    return (
      <div>
        {
          bears.map(bear => (
          <div key={bear.id}>
            {bear.name}
            <button onClick={() => this.props.deleteBear(bear.id)}>X</button>
          </div>
          ))
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => (
  {  bear: state.bear }
);

export default connect(mapStateToProps, {
  deleteBear: deleteBear
})(App);
