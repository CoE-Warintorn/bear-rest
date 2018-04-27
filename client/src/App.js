import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  
  render() {
    let bears = this.props.bear
    return (
      <div>
        {
          bears.map(bear => <div key={bear.id}>{bear.name}</div>)
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => (
  {  bear: state.bear }
);

export default connect(mapStateToProps)(App);
