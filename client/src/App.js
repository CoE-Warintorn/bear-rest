import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/bears')
    .then( res => {
      this.setState({data: res.data})
    })
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
