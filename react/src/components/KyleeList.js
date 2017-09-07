import React from 'react';
import { Link } from 'react-router';

const KyleeList = props => {
  let kylees = props.kylees.map((kylee) => <li key={kylee.id}>{kylee.name}</li>)

  return(
    <div>
      <ul>
        {kylees}
      </ul>
      {props.page == 1 ? null : <Link to={`/?page=${parseInt(props.page)-1}`}>Previous</Link>}
      <Link to={`/?page=${parseInt(props.page)+1}`}>Next</Link>
    </div>
  )
}

export default KyleeList;
