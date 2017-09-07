import React from 'react';
import ReactPaginate from 'react-paginate';
import { browserHistory } from 'react-router';

class KyleeList extends React.Component {
  constructor(props){
    super(props)

    this.handlePageClick = this.handlePageClick.bind(this)
  }

  handlePageClick(data) {
    let selected = data.selected+1;
    browserHistory.push(`/?page=${selected}`)
  };

  render(){
    let kylees = this.props.kylees.map((kylee) => <li key={kylee.id}>{kylee.name}</li>)

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
            pageCount={Math.ceil(this.props.total/10)}
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
