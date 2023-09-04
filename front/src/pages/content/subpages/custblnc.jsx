import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {variables} from '../../../variables'

function Custblnc() {
  const url = (variables.API_URL+variables.CUSTBLN_GET);
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    // <div className="App">
    //   <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
    //   <center>
    //     {data.map((dataObj, index) => {
    //       return (
    //         <div
    //           style={{
    //             width: "15em",
    //             backgroundColor: "#35D841",
    //             padding: 2,
    //             borderRadius: 10,
    //             marginBlock: 10,
    //           }}
    //         >
    //           <p style={{ fontSize: 20, color: 'white' }}>{dataObj.CSTMCODE}</p>
    //         </div>
    //       );
    //     })}
    //   </center>
    // </div>
          <main>
          <table className="table table-striped w-auto fs-6">
            <thead>
                <tr>
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
                </tr>
            </thead>
            <tbody>
                {data.map(cbln=>
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
  );
}

export default Custblnc;