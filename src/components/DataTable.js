import React from 'react';
import "./DataTable.css"

const DataTable = (props) => {
    return <div>
    <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map(
            (resultData) => (
              <tr key={resultData.year}>
            <td>{resultData.year}</td>
            <td>{resultData.savingsEndOfYear}</td>
            <td>{resultData.yearlyInterest}</td>
            <td>{resultData.savingsEndOfYear - props.initialInvestement - resultData.yearlyContribution * resultData.year}</td>
            <td>{props.initialInvestement + resultData.yearlyContribution * resultData.year}</td>
          </tr>
            ) 
          )}
          
        </tbody>
    </table>

    </div>;
}



export default DataTable;