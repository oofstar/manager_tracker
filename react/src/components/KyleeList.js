import React from 'react';
import ReactPaginate from 'react-paginate';

class KyleeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 0
    }
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  handlePageClick(data) {
    let selected = data.selected;
    this.setState({currentPage: selected});
  };

  render(){
    let filteredKylees = this.props.kylees.slice(this.state.currentPage*10,(this.state.currentPage+1)*10)

    let kylees = filteredKylees.map((kylee) => <li key={kylee.id}>{kylee.name}</li>)

    return(
      <div>
        <ul>
          {kylees}
        </ul>
        <div className={"react-paginate"}>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break"}
            pageCount={Math.ceil(this.props.kylees.length/10)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    )
  }
}

export default KyleeList;
