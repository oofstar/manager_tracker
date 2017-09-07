import React from 'react';

class KyleeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 1,
      kyleesPerPage: 5
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render(){
    let indexOfLastKylee = this.state.currentPage * this.state.kyleesPerPage;
    let indexOfFirstKylee = indexOfLastKylee - this.state.kyleesPerPage;
    let currentKylees = this.props.kylees.slice(indexOfFirstKylee, indexOfLastKylee);

    let kylees = currentKylees.map((kylee) => <li key={kylee.id}>{kylee.name}</li>)

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.kylees.length / this.state.kyleesPerPage); i++) {
      pageNumbers.push(i);
    }

    let currentPageNumbers = pageNumbers.filter((page) => {
      if(this.state.currentPage == 1 || this.state.currentPage == 2){
        return (page >= 1 && page <= 5)
      }else{
        return (page >= this.state.currentPage - 2 && page <= this.state.currentPage + 2)
      }
    })

    let renderPageNumbers = currentPageNumbers.map(number => {
      return(
        <li
          key={`page ${number}`}
          id={number}
          onClick={this.handleClick}
          className="block"
        >
          {number}
        </li>
      );
    });

    return(
      <div>
        <ul>
          {kylees}
        </ul>
        <ul>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default KyleeList;
