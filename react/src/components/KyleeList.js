import React from 'react';

class KyleeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 0
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  nextPage(){
    this.setState({currentPage: this.state.currentPage + 1})
  }

  prevPage(){
    this.setState({currentPage: this.state.currentPage - 1})
  }

  render(){
    let filteredKylees = this.props.kylees.slice(this.state.currentPage*10,(this.state.currentPage+1)*10)

    let kylees = filteredKylees.map((kylee) => <li key={kylee.id}>{kylee.name}</li>)

    return(
      <div>
        <ul>
          {kylees}
        </ul>
        {this.state.currentPage == 0 ? null : <button onClick={this.prevPage}>Previous</button>}
        {this.state.currentPage == Math.round(this.props.kylees.length/10) ? null : <button onClick={this.nextPage}>Next</button>}
      </div>
    )
  }
}

export default KyleeList;
