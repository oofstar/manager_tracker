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
    let page = this.props.location.query.page || 1
    fetch(`http://localhost:3000/api/v1/kylees?page=${page}`)
      .then((response) => response.json())
      .then((json) => this.setState({kylees: json.kylees, total: json.total}))
  }

  componentWillReceiveProps(nextProps){
    let page = nextProps.location.query.page || 1
    fetch(`http://localhost:3000/api/v1/kylees?page=${page}`)
      .then((response) => response.json())
      .then((json) => this.setState({kylees: json.kylees}))
  }

  render(){
    let page = this.props.location.query.page || 1
    return(
      <KyleeList kylees={this.state.kylees} total={this.state.total} page={page}/>
    )
  }
}

export default KyleeContainer;
