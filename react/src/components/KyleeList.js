import React from 'react';

const KyleeList = (props) => {
  let kylees = props.kylees.map((kylee) => <li key={kylee.id}>{kylee.name}</li>)

  return(
    <ul>
      {kylees}
    </ul>
  )
}

export default KyleeList;
