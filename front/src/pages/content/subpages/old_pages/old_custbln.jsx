import React from 'react'
import { Component } from 'react'
import {variables} from '../../../../variables'

class Custbln extends Component{

  constructor(props){
    super(props);

    this.state={
      customerBalance:[]
    };
  }
  
  async refreshCustomerBalances(){
    fetch(this.variables.API_URL+variables.CUSTBLN_GET)
      .then(response=>response.json())
      .then(data=>{
        this.setState({customerBalance:data});
      });
  }

  componentDidMount(){
    this.refreshCustomerBalances();
  }

  renter() {
    const {
      customerBalance
    } = this.state;
  return (
      <main>
        <table className="tabledata">
          <thead>
            <th>Κωδ. Πελάτη</th>
            <th>Όνομα</th>
            <th>Πωλητής</th>
            <th>ΑΦΜ</th>
            <th>Τηλέφωνο</th>
            <th>Αν. Υπολ</th>
            <th>Επιταγές</th>
            <th>1-30</th>
            <th>31-60</th>
            <th>60+</th>
          </thead>
          <tbody>
              {customerBalance.map(cbln=>
                  <tr key={cbln.CSTMCODE}>
                    <td>{cbln.CSTMCODE}</td>
                    <td>{cbln.CSTMNAME}</td>
                    <td>{cbln.SALESMANCODE}</td>
                    <td>{cbln.TIN}</td>
                    <td>{cbln.PHONE1}</td>
                    <td>{cbln.BALANCE}</td>
                    <td>{cbln.OPENBALANCE}</td>
                    <td>{cbln.FIRSTINTERVAL}</td>
                    <td>{cbln.SECONDINTERVAL}</td>
                    <td>{cbln.THIRDINTERVAL}</td>
                  </tr>
                )}
          </tbody>
        </table>
      </main>
    ) 
  }
}

export default Custbln;