import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {variables} from '../../../variables'

function Custinfo() {
  const url = (variables.API_URL+variables.CUSTLIST_GET);
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
                    <th>Διακριτικό</th>
                    <th>ΑΦΜ</th>
                    <th>Υποκ</th>
                    <th>Διευθ</th>
                    <th>Αριθ</th>
                    <th>Πόλη</th>
                    <th>ΤΚ</th>
                    <th>Τηλ 1</th>
                    <th>Τηλ 2</th>
                    <th>Τηλ Επικ</th>
                    <th>eMail</th>
                    <th>Επάγγελμα</th>
                    <th>Τρ. Πληρ.</th>
                    <th>Εκ %</th>
                </tr>
            </thead>
            <tbody>
                {data.map(cbln=>
                    <tr key={cbln.HECUSTOMERCODE}>
                      <td>{cbln.HECUSTOMERCODE}</td>
                      <td>{cbln.HECUSTOMERNAME}</td>
                      <td>{cbln.HETRADERDISTINCTIVETITLE}</td>
                      <td>{cbln.HECUSTOMERTIN}</td>
                      <td>{cbln.HEBRANCHNAME}</td>
                      <td>{cbln.HESTREET}</td>
                      <td>{cbln.HESTREETNUMBER}</td>
                      <td>{cbln.HECITY}</td>
                      <td>{cbln.HEPOSTALCODE}</td>
                      <td>{cbln.HEPHONE1}</td>
                      <td>{cbln.HEPHONE2}</td>
                      <td>{cbln.HECONTPHONE1}</td>
                      <td>{cbln.HEBRANCHEMAIL}</td>
                      <td>{cbln.HEPRFNAME}</td>
                      <td>{cbln.HEPAYMENTMETHOD}</td>
                      <td>{cbln.HEDISCOUNT}</td>
                    </tr>
                  )}
            </tbody>
          </table>
        </main>
  );
}

export default Custinfo;