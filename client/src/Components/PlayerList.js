import React from "react";
import axios from "axios";
import { Table } from 'reactstrap';
import ListRow from "./DisplayedList"

class PlayerList extends React.Component{
    constructor(){
        super();
        this.state = {
            rankData: [],
        };
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then(res => {
            //console.log(res.data);
            this.setState({
                rankData: res.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
          <>
          <h2>Women's World Cup players ranked in search interest <br></br>June-July 2019</h2>
            <Table>
            <thead className="table-header">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Country</th>
                <th>Searches</th>
              </tr>
            </thead>
            <tbody>
             {this.state.rankData.map(each => {
            //console.log(each);
            return (
              <ListRow
                key={each.id}
                rankData={each}
              />
            );
          })}
          </tbody>
            </Table>
            </>
        )
    }

}

export default PlayerList;