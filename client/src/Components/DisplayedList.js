import React from "react";


const ListRow = props => {
    //console.log(props);

    return(
        
          <tr>
            <th scope="row">{props.rankData.id}</th>
            <td>{props.rankData.name}</td>
            <td>{props.rankData.country}</td>
            <td>{props.rankData.searches}</td>
          </tr>
    )
}

export default ListRow;