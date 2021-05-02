import React from "react";
import TableContent from "../TableContent/TableContent";

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col" type="button" onClick={props.sortByName}>
                        <div type="button">Name <i className="fas fa-sort"></i></div>
                    </th>
                </tr>
            </thead>
            {props.results.map((result, index) => (
                    <TableContent key={index} alt={result.name.first + result.name.last} src={result.picture.thumbnail} firstName={result.name.first} lastName={result.name.last} phoneNumber={result.phone} emailAddress={result.email} dob={result.dob.date}/> ))
                }
        </table>
    )
}

export default Table;