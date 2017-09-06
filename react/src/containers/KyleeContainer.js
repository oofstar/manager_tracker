import React from 'react';
import KyleeList from '../components/KyleeList';

class KyleeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      kylees: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/kylees')
      .then((response) => response.json())
      .then((json) => this.setState({kylees: json}))
  }

  render(){
    return(
      <KyleeList kylees={this.state.kylees}/>
    )
  }
}

export default KyleeContainer;
