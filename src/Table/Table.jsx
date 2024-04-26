import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  const regionalData = data.regional || [];

  return (
    <div className="scrollable-table">
      <table>
        <thead>
          <tr>
            <th>STATE/UT</th>
            <th>CONFIRMED</th>
            <th>ACTIVE</th>
            <th>RECOVERED</th>
            <th>DECEASED</th>
          </tr>
        </thead>
        <tbody>
          {regionalData.map((state) => (
            <tr key={state.loc}>
              <td>{state.loc}</td>
              <td>{state.confirmedCasesIndian}</td>
              <td>{state.totalConfirmed - state.discharged - state.deaths}</td>
              <td>{state.discharged}</td>
              <td>{state.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
