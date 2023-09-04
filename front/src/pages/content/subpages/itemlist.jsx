import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { variables } from "../../../variables";

function Itemlist() {
  const url = (variables.API_URL+variables.ITMLIST_POST);
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        "active_not": "1"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },     
     })
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
                    <th>Κωδ. Είδους</th>
                    <th>Περιγραφή</th>
                    <th>Ενεργό</th>
                    <th>Τιμή Χονδ.</th>
                    <th>Εκπτ.</th>
                    <th>Εναλακ. Κωδ</th>
                    <th>Κατ ΦΠΑ</th>
                    <th>Μ.Μ.</th>
                </tr>
            </thead>
            <tbody>
                {data.map(cbln=>
                    <tr key={cbln.ITMSCODE}>
                      <td>{cbln.ITMSCODE}</td>
                      <td>{cbln.ITMSNAME}</td>
                      <td>{cbln.ACTIVE}</td>
                      <td>{cbln.WHOLESALESPRICE}</td>
                      <td>{cbln.DISCOUNT}</td>
                      <td>{cbln.AUXILIARYCODE}</td>
                      <td>{cbln.VATCLASSNAME}</td>
                      <td>{cbln.AMSNTNAME}</td>
                    </tr>
                  )}
            </tbody>
          </table>
        </main>
  );
}

export default Itemlist;